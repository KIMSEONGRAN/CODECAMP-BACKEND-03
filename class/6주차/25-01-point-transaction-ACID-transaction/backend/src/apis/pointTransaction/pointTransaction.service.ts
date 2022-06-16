import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
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

    private readonly connection: Connection, // 1. 커넥션을 하는 이유는 실행중 발생할 수 있는 에러때문에 문제가 생기지 않게, 에러를 마주치면 롤백시키기 위해서 씀
  ) {}
  async create({ impUid, amount, currentUser }) {
    // 2.
    const queryRunner = await this.connection.createQueryRunner(); // createQueryRunner()는 내장함수임.
    await queryRunner.connect(); // 연결

    // ======================= 3. transaction 시작!! ==================================
    await queryRunner.startTransaction(); // 이 문법 아래로 try{}catch{}옴. 이걸 기준으로 connection 실행한다고 보면 됨.
    // 근데 쿼리러너기준으로 아래에서 queryRunner.manager 이렇게 안쓰이는 애들은 트랜잭션이랑 상관없는 애들임.

    try {
      // 1. pointTransaction 테이블에 거래기록을 1줄 생성
      // .create하면 이건 DB로 저장안되고 다음과 같은 객체가 생성만 된다.
      // 이렇게 하는 이유는 그냥 케이스 보여주려고 하는거임. 저장 다이렉트로 해도 ㄱㅊ
      const pointTransaction = this.pointTransactionRepository.create({
        impUid: impUid,
        amount: amount,
        user: currentUser,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
      });
      // DB에 저장하려면 이렇게 .save 해야함.
      // await this.pointTransactionRepository.save(pointTransaction);
      await queryRunner.manager.save(pointTransaction);

      throw new Error('강제로 에러 발생!!!!');

      // 2. 유저의 돈 찾아오기
      const user = await this.userRepository.findOne({ id: currentUser.id });

      // 3. 유저의 돈 업데이트
      // .update는 create와 달리 DB에 save처럼 똑같이 저장이 된다!!
      // await this.userRepository.update(
      //   // 조건
      //   { id: user.id },
      //   // 변경하고자하는 내용
      //   { point: user.point + amount },
      // );
      const updatedUser = this.userRepository.create({
        ...user,
        point: user.point + amount,
      });
      await queryRunner.manager.save(updatedUser);

      // ==================================== commit 성공 확정!! ========================================
      await queryRunner.commitTransaction();

      // =================================================================================================

      // 4. 최종결과 프론트엔드에 돌려주기
      return pointTransaction;
    } catch (error) {
      // ================================ 4. 롤백 되돌리기 ===================================
      await queryRunner.rollbackTransaction();
    } finally {
      // ====================== 5. 연결 해제!! =======================
      // 연결 해제안하면 누적되고, 한계치에 다다르면 연결을 시킬 수 없다고 되기에 필요없으면 연결 해제해라.
      // finally 는 catch든 try든 상관없이 무조건 실행
      await queryRunner.release();
    }
  }
}
