import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from './entities/artist.entity';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>,
  ) {}
  async create({ name }) {
    const result = await this.artistRepository.save({
      name, // 키와 밸류 이름이 같으면 한번만 쓸 수 있다.
    });
    console.log(result); // {name:"전자제품"}
    return result;
  }
}
