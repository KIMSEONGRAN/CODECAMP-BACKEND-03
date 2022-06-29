import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from '../images/entities/image.entity';
import { Work } from '../works/entities/work.entity';
import { Webtoon } from './entities/webtoon.entity';

@Injectable()
export class WebtoonService {
  constructor(
    @InjectRepository(Webtoon)
    private readonly webtoonRepository: Repository<Webtoon>,

    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async findAll() {
    return await this.webtoonRepository.find({
      relations: ['work'],
    });
  }

  async create({ createwebtoonInput }) {
    // console.log(this.webtoonRepository);
    console.log('==========================');
    console.log(createwebtoonInput);
    const { episode, workId } = createwebtoonInput;

    const result = await this.webtoonRepository.save({
      episode,
      workId,
    });

    for (let i = 0; i < createwebtoonInput.url.length; i++) {
      await this.imageRepository.save({
        contents_URL: createwebtoonInput.url[i],
        webtoonId: result.id,
      });
    }

    console.log(createwebtoonInput.url);

    console.log(result);

    return result;
  }

  // ===================================================================== //

  async update({ updateWebtoonInput }) {
    const mywork = await this.webtoonRepository.findOne({
      where: { id: updateWebtoonInput.workId },
    });

    const newWork = {
      ...mywork,
      ...updateWebtoonInput,
    };

    const newWebtoon = await this.webtoonRepository.save(newWork);

    console.log('================', mywork);
    for (let i = 0; i < updateWebtoonInput.url.length; i++) {
     console.log('여기',newWebtoon.id)
      await this.imageRepository.save({
        contents_URL: updateWebtoonInput.url[i],
        webtoonId: newWebtoon.id,
        
      });
    }

    return newWebtoon
  }

  async delete({ workId }) {
    const result = await this.webtoonRepository.softDelete({ id: workId });
    return result.affected ? true : false;
  }

  async restoreWebtoon({ workId }) {
    const result = await this.webtoonRepository.restore({ id: workId });
    return result.affected ? true : false;
  }

  async findAllWithDeleted() {
    return await this.webtoonRepository.find({
      withDeleted: true,
    });
  }
}
