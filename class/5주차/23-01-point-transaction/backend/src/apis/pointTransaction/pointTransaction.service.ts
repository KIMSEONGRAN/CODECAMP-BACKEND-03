import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './entities/pointTransaction.entity';

@Injectable()
export class PointTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointTransactionRepository: Repository<PointTransaction>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create({ impUid, amount, currentUser }) {
    // 1. pointTransaction 테이블에 거래기록을 1줄 생성
    // .create하면 이건 DB로 저장안되고 다음과 같은 객체가 생성만 된다.
    // 이렇게 하는 이유는 그냥 케이스 보여주려고 하는거임. 저장 다이렉트로 해도 ㄱㅊ
    console.log('============================================');
    const pointTransaction = this.pointTransactionRepository.create({
      impUid: impUid,
      amount: amount,
      user: currentUser,
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
    });
    // DB에 저장하려면 이렇게 .save 해야함.
    await this.pointTransactionRepository.save(pointTransaction);

    // 2. 유저의 돈 찾아오기
    const user = await this.userRepository.findOne({ id: currentUser.id });

    // 3. 유저의 돈 업데이트
    // .update는 create와 달리 DB에 save처럼 똑같이 저장이 된다!!
    await this.userRepository.update(
      // 조건
      { id: user.id },
      // 변경하고자하는 내용
      { point: user.point + amount },
    );
    // 4. 최종결과 프론트엔드에 돌려주기
    return pointTransaction;
  }
}
