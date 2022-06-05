import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from '../artists/entities/artist.entity';
import { Writer } from '../writers/entities/writer.entity';
import { Work } from './entities/work.entity';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private readonly workRepository: Repository<Work>,

    @InjectRepository(Writer)
    private readonly writerRepository: Repository<Writer>,

    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>,
  ) {}

  async findAll() {
    return await this.workRepository.find({
      relations: ['writer', 'artist'],
    });
  }

  async findOne({ workId }) {
    return await this.workRepository.findOne({ where: { id: workId } });
  }

  async create({ createWorkInput }) {
    const { writer, artist, ...work } = createWorkInput;
    const result1 = await this.writerRepository.save({
      ...writer,
    });

    const result2 = await this.artistRepository.save({
      ...artist,
    });
    console.log();
    const result = await this.workRepository.save({
      ...work,
      artist: result2,
      writer: result1,
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

  async delete({ workId }) {
    const result = await this.workRepository.softDelete({ id: workId });
    return result.affected ? true : false;
  }

  async findAllWithDeleted({ workId }) {
    return await this.workRepository.find();
  }

  async restoreProduct({ workId }) {
    const result = await this.workRepository.restore({ id: workId });
    return result.affected ? true : false;
  }
}
