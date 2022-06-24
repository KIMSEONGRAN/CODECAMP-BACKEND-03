import axios from 'axios';
import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from '../users/entites/user.entity';
import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';
import 'dotenv/config';
import { IamportService } from '../iamport/iamport.service';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly iamportService: IamportService,

    private readonly connection: Connection,
  ) {}
  async create({ impUid, amount, currentUser }) {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('SERIALIZABLE');

    const checkImpUid = await this.paymentRepository.findOne({
      impUid: impUid,
    });

    if (checkImpUid) throw new ConflictException();
    const accessToken = await this.iamportService.getToken();

    try {
      await axios({
        url: `https://api.iamport.kr/payments/${impUid}`,
        method: 'get',
        headers: { Authorization: accessToken },
      });

      // 1. PaymentService 테이블에 거래기록을 1줄 생성
      // .create하면 이건 DB로 저장안되고 다음과 같은 객체가 생성만 된다.
      // 이렇게 하는 이유는 그냥 케이스 보여주려고 하는거임. 저장 다이렉트로 해도 ㄱㅊ
      const pointTransaction = this.paymentRepository.create({
        impUid: impUid,
        amount: amount,
        user: currentUser,
        status: PAYMENT_STATUS_ENUM.PAYMENT,
      });

      // console.log('pointTransction=============', pointTransaction);

      // DB에 저장하려면 이렇게 .save 해야함.
      // await this.paymentRepository.save(pointTransaction);
      await queryRunner.manager.save(pointTransaction);

      console.log('저장=============', pointTransaction);

      // 2. 유저의 돈 찾아오기
      // const user = await this.userRepository.findOne({ id: currentUser.id });
      const user = await queryRunner.manager.findOne(
        User,
        { id: currentUser.id },
        { lock: { mode: 'pessimistic_write' } },
      );

      // 3. 유저의 돈 업데이트
      // .update는 create와 달리 DB에 save처럼 똑같이 저장이 된다!!
      // await this.userRepository.update(
      //   // 조건
      //   { id: user.id },
      //   // 변경하고자하는 내용
      //   { pay: user.pay + amount },
      // );
      const updatedUser = this.userRepository.create({
        ...user,
        pay: user.pay + amount,
      });
      await queryRunner.manager.save(updatedUser);

      await queryRunner.commitTransaction();

      // 4. 최종결과 프론트엔드에 돌려주기
      return pointTransaction;
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
      // throw new UnprocessableEntityException();
    } finally {
      await queryRunner.release();
    }
  }

  // 환불 ==========================================================================refund
  async refund({ impUid, currentUser }) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('SERIALIZABLE');

    const payment = await this.paymentRepository.findOne({ impUid: impUid });
    if (payment.status === 'CANCEL')
      throw new UnprocessableEntityException('UnprocessableEntityException');

    const accessToken = await this.iamportService.getToken();

    try {
      await axios({
        url: 'https://api.iamport.kr/payments/cancel',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken, // 아임포트 서버로부터 발급받은 엑세스 토큰
        },
        data: {
          impUid, // imp_uid를 환불 `unique key`로 입력
        },
      });
      // const refundPaied = await this.userRepository.findOne({
      //   id: currentUser.id,
      // });
      const user = await queryRunner.manager.findOne(
        User,
        {
          id: currentUser.id,
        },
        {
          lock: { mode: 'pessimistic_write' },
        },
      );
      // await this.userRepository.update(
      //   // 조건
      //   { id: currentUser.id },
      //   // 변경하고자하는 내용
      //   { pay: refundPaied.pay - payment.amount },
      // );
      const refundPaied = this.userRepository.create({
        ...user,
        pay: user.pay - payment.amount,
      });
      const updatePay = this.paymentRepository.create({
        impUid: impUid,
        amount: 0 - payment.amount,
        user: currentUser,
        status: PAYMENT_STATUS_ENUM.CANCEL,
      });
      // await this.paymentRepository.save(updatePay);
      await queryRunner.manager.save(refundPaied); // 이걸 쓰기 위해서 위에서 create를 해줘야한다. update로는 형식을 가져올 수 없기 때문에 내가 transaction save 쓸려면 파일 새로 생성 해야한다.
      await queryRunner.manager.save(updatePay);
      await queryRunner.commitTransaction();

      return updatePay;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
