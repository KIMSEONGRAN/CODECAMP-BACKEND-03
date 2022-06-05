import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entites/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // 여러개 조회 ----------------------------
  async findAll() {
    return await this.userRepository.find();
  }

  // + 한개 조회
  async findOne({ userId }) {
    console.log(userId);
    return await this.userRepository.findOne({
      where: { id: userId },
    });
  }

  // 생성----------------------------------------------
  async create({ email, phoneNum, name, pwd }) {
    const user = await this.userRepository.findOne({ email });
    if (user) throw new ConflictException('이미 등록된 이메일입니다');

    return this.userRepository.save({ email, phoneNum, name, pwd });
  }

  // ❌️❌️❌️❌️❌️❌️❌️질문있습니다!!!!!!!!!!! ❌️❌️❌️❌️❌️❌️❌️❌️
  // 이렇게 하면 "Unknown argument \"email\" on field \"Mutation.createUser\"."
  // 에러가 납니다. 왜 그럴까요? 위에서는 인자를 각각 정해서 매개변수로 받아주었고
  //  아래서는 통쨰로 데이터를 가져와 그중에서 뽑아서 쓰려고 했는데 원리로는 맞는 것
  // 같은데 이해를 못하겠습니다. ==================================================

  // async create({ createUserInput }) {
  //   console.log(createUserInput)
  //   const { email, ...user } = createUserInput;
  //   const email2 = await this.userRepository.findOne({ email });
  //   if (email2) throw new ConflictException('이미 등록된 이메일입니다');

  //   return this.userRepository.save(createUserInput);
  // ❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️  
  

  // 수정------------------------------------------------

  async update({ userId, updateUserInput }) {
    const userDate = await this.userRepository.findOne({
      where: { id: userId },
    });

    const newUser = {
      ...userDate,
      ...updateUserInput,
    };
    return await this.userRepository.save(newUser);
  }

  // 삭제 ----------------------------------------------------
  async delete({ userId }) {
    const result = await this.userRepository.softDelete({ id: userId });
    return result.affected ? true : false;
  }

  // 복구----------------------------------------------------
  async restore({ userId }) {
    const result = await this.userRepository.restore({ id: userId });
    return result.affected ? true : false;
  }
}
