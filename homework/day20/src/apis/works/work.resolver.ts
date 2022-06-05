import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateWorkInput } from './dto/createWork.input';
import { UpdateWorkInput } from './dto/updateWork.input';
import { Work } from './entities/work.entity';
import { WorkService } from './work.service';

@Resolver()
export class WorkResolver {
  constructor(private readonly WorkService: WorkService) {}

  @Query(() => [Work])
  fetchWorks() {
    return this.WorkService.findAll();
  }

  @Query(() => Work)
  fetchWork(
    @Args('workId') workId: string, //
  ) {
    return this.WorkService.findOne({ workId });
  }

  @Mutation(() => Work)
  createWork(@Args('createWorkInput') createWorkInput: CreateWorkInput) {
    return this.WorkService.create({ createWorkInput });
  }

  @Mutation(() => Work)
  async updateWork(
    @Args('workId') workId: string,
    @Args('updateWorkInput') updateWorkInput: UpdateWorkInput,
  ) {
    // 완결여부 boolean확인
    await this.WorkService.checkisComplete({ workId });
    return await this.WorkService.update({ workId, updateWorkInput });
  }

  // work 삭제
  @Mutation(() => Boolean)
  deleteWork(@Args('workId') workId: string) {
    return this.WorkService.delete({ workId });
  }

  @Query(() => [Work])
  fetchProductsWithDeleted() {
    return this.WorkService.findAllWithDeleted();
  }

  @Mutation(() => Boolean)
  restoreProduct(@Args('workId') workId: string) {
    return this.WorkService.restoreProduct({ workId });
  }
}
