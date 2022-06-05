import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Writer } from './entities/writer.entity';
import { WriterService } from './writer.service';

@Resolver()
export class WriterResolver {
  constructor(private readonly WriterService: WriterService) {}

  @Mutation(() => Writer)
  createWriter(
    @Args('name') name: string, //
  ) {
    return this.WriterService.create({ name });
  }
}
