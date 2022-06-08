import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from '../artists/entities/artist.entity';
import { Genre } from '../genres/entities/genre.entity';
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

    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}


  // 여러개조회 ===================================================  findAll
  async findAll() {
    return await this.workRepository.find({
      relations: ['writer', 'artist', 'genres', 'days'],
    });
  }

  // + 한개 조회 -                                              findOne
  async findOne({ workId }) {
    return await this.workRepository.findOne({
      where: { id: workId },
      relations: ['writer', 'artist', 'genres', 'days'],
    });
  }

  // 생성 ===================================================  create
  async create({ createWorkInput }) {
    const { writer, artist, genres, ...work } = createWorkInput;
    const result1 = await this.writerRepository.save({
      ...writer,
    });

    const result2 = await this.artistRepository.save({
      ...artist,
    });

    const arr = [];
    for (let i = 0; i < genres.length; i++) {
      const genreTag = genres[i].replace('#', '');

      const prevGenre = await this.genreRepository.findOne({
        genres: genreTag,
      });

      if (prevGenre) {
        arr.push(prevGenre);
      } else {
        const newGenre = await this.genreRepository.save({ genres: genreTag });
        arr.push(newGenre);
      }
    }

    const result = await this.workRepository.save({
      ...work,
      artist: result2,
      writer: result1,
      genres: arr,
    });
    return result;
  }

  // 수정 ===================================================  update
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

  // 삭제 ===================================================  delete
  async delete({ workId }) {
    const result = await this.workRepository.softDelete({ id: workId });
    return result.affected ? true : false;
  }

  // 삭제한데이터포함_모든상품조회 =========================== findAllWithDeleted
  async findAllWithDeleted() {
    return await this.workRepository.find({
      withDeleted: true,
    });
  }

  
  // 복구 ==================================================== restoreProduct
  async restoreProduct({ workId }) {
    const result = await this.workRepository.restore({ id: workId });
    return result.affected ? true : false;
  }
}
