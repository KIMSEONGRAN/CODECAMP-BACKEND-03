import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Writer } from './entities/writer.entity';
import { WriterResolver } from './writer.resolver';
import { WriterService } from './writer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Writer])],
  providers: [
    WriterResolver, //
    WriterService,
  ],
})
export class WriterModule {}
