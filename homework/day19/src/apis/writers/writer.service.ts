import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Writer } from './entities/writer.entity';

@Injectable()
export class WriterService {
  constructor(
    @InjectRepository(Writer)
    private readonly writerRepository: Repository<Writer>,
  ) {}
  async create({ name }) {
    const result = await this.writerRepository.save({
      name, // 키와 밸류 이름이 같으면 한번만 쓸 수 있다.
    });
    console.log(result); // {name:"전자제품"}
    return result;
  }
}
