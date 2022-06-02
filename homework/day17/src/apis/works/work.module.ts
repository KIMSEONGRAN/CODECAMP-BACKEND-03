import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Work } from './entities/work.entity';
import { WorkResolver } from './work.resolver';
import { WorkService } from './work.service';

@Module({
  imports: [TypeOrmModule.forFeature([Work])],
  providers: [WorkResolver, WorkService],
})
export class WorkModule {}
