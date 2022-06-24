import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entites/user.entity';
import * as bcrypt from 'bcrypt';
import { CurrentUser } from 'src/commons/auth/gql-user-param';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // 여러개 조회 ---------------------------- findAll
  async findAll() {
    return await this.userRepository.find();
  }

  // + 한개 조회 -  아이디로
  // async findOne({ userId }) {
  //   console.log(userId);
  //   return await this.userRepository.findOne({
  //     where: { id: userId },
  //   });
  // }

  // + 한개 조회 -  이메일로                  findOne
  async findOne({ email }) {
    return await this.userRepository.findOne({ email });
  }

  // 생성---------------------------------------------- create
  async create({ email, hashedPassword: pwd, phoneNum, name }) {
    const user = await this.userRepository.findOne({ email });
    if (user) throw new ConflictException('이미 등록된 이메일입니다');
    return await this.userRepository.save({ email, pwd, phoneNum, name });
  }

  // 수정------------------------------------------------ update

  async update({ userId, pwd, updateUserInput }) {
    const userDate = await this.userRepository.findOne({
      where: { id: userId },
    });
    const updatedPwd = await bcrypt.hash(pwd, 10);

    const newUser = {
      ...userDate,
      ...updateUserInput,
      password: updatedPwd,
    };
    return await this.userRepository.save(newUser);
  }

  // 삭제 ----------------------------------------------------  delete
  async delete({ userId }) {
    const result = await this.userRepository.softDelete({ id: userId });
    return result.affected ? true : false;
  }

  // 복구---------------------------------------------------- restore
  async restore({ userId }) {
    const result = await this.userRepository.restore({ id: userId });
    return result.affected ? true : false;
  }

  // 비밀번호 변경 ------------------------------------------ updatePwd
  async updatePwd({ hashedPassword: pwd, id, ...user }) {
    const newUser = {
      pwd,
      id,
      ...user,
    };
    return await this.userRepository.save(newUser);
  }

  // 로그인한 유저 삭제 --------------------------------------  deleteUser
  async deleteUser({ CurrentUser }) {
    const result = await this.userRepository.softDelete({
      id: CurrentUser.id,
    });
    return result.affected ? true : false;
  }
}
