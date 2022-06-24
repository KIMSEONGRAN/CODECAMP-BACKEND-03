import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    private readonly connection: Connection,
  ) {}

  async create({ amount }) {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('READ UNCOMMITTED'); // isolation 속성지정. mysQL에선 디폴트는: REPEATABLE-READ. db마다 디폴트값은 다르다
    try {
      const payment = await this.paymentRepository.create({ amount });
      await queryRunner.manager.save(payment);

      // 5초 뒤에 특정 이유로 실패함!!!
      setTimeout(async () => {
        await queryRunner.rollbackTransaction();
      }, 5000);
      //   await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    }
  }

  async findAll() {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('READ UNCOMMITTED');
    try {
      // 만약 5초 이내에 조회하면, 위에서 등록한 금액(커밋되지 않은 금액)이 조회됨
      const payment = await queryRunner.manager.find(Payment);
      await queryRunner.commitTransaction();
      return payment;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    }
  }
}
