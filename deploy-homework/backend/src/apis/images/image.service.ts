import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';

export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async create({ url, webtoon }) {
    for (let i = 0; i < url.length; i++) {
      const urlOne = url[i];
      console.log(urlOne);
    }

    const result = await this.imageRepository.save({
      contents_URL: url,
      webtoonId: webtoon,
    });
    return result;
  }

  async update({ url, webtoon }) {
    this.imageRepository.softDelete({ webtoonId: webtoon });
    return await this.create({ url, webtoon });
  }
}
