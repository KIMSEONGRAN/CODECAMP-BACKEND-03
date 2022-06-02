import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Work } from './entities/work.entity';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private readonly workRepository: Repository<Work>,
  ) {}

  async findAll() {
    return await this.workRepository.find();
  }

  async findOne({ workId }) {
    return await this.workRepository.findOne({ where: { id: workId } });
  }

  async create({ createWorkInput }) {
    const result = await this.workRepository.save({
      ...createWorkInput,
    });
    return result;
  }

  async update({ workId, updateWorkInput }) {
    const mywork = await this.workRepository.findOne({
      where: { id: workId },
    });

    const newWork = {
      ...mywork,
      ...updateWorkInput,
    };
    return await this.workRepository.save(newWork);
  }

  async checkisComplete({ workId }) {
    const work = await this.workRepository.findOne({
      where: { id: workId },
    });

    if (work.isComplete)
      throw new UnprocessableEntityException('완결난 작품입니다.');
  }
}
