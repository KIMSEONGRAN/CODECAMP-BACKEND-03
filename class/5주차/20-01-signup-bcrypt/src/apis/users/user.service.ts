import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  //                    ↓ 이렇게 쓰면 hashedPassword를 password라는 변수에 넣는다는 의미
  async create({ email, hashedPassword: password, name, age }) {
    const user = await this.userRepository.findOne({ email });
    if (user) throw new ConflictException('이미 등록된 이메일입니다');

    // DB 등록
    const result1 = this.userRepository.save({
      email,
      password, // key와 value 이름이 같으면 이름 하나만 써도 됨.
      name,
      age,
    });
    return result1;
  }
}
