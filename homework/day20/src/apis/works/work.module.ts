import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { write } from 'fs';
import { Artist } from '../artists/entities/artist.entity';
import { Genre } from '../genres/entities/genre.entity';
import { Writer } from '../writers/entities/writer.entity';
import { Work } from './entities/work.entity';
import { WorkResolver } from './work.resolver';
import { WorkService } from './work.service';

@Module({
  imports: [TypeOrmModule.forFeature([Work, Writer, Artist, Genre])],
  providers: [WorkResolver, WorkService],
})
export class WorkModule {}
