import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileService } from '../file/file.service';
import { Image } from '../images/entities/image.entity';
import { Work } from '../works/entities/work.entity';
import { Webtoon } from './entities/webtoon.entity';
import { WebtoonResolver } from './webtoon.resolver';
import { WebtoonService } from './webtoon.service';

@Module({
  imports: [TypeOrmModule.forFeature([Webtoon, Work, Image])],
  providers: [WebtoonResolver, WebtoonService, FileService],
})
export class WebtoonModule {}
