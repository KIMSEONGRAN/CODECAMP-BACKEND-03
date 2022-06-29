import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from '../artists/entities/artist.entity';
import { Genre } from '../genres/entities/genre.entity';
import { Writer } from '../writers/entities/writer.entity';
import { Work } from './entities/work.entity';
import { WorkResolver } from './work.resolver';
import { WorkService } from './work.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    TypeOrmModule.forFeature([Work, Writer, Artist, Genre]),
    ElasticsearchModule.register({
      node: 'http://elasticsearch:9200',
    }),
  ],
  providers: [WorkResolver, WorkService],
})
export class WorkModule {}
