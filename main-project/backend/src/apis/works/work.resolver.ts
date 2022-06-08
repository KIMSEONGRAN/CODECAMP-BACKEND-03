import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateWorkInput } from './dto/createWork.input';
import { UpdateWorkInput } from './dto/updateWork.input';
import { Work } from './entities/work.entity';
import { WorkService } from './work.service';

@Resolver()
export class WorkResolver {
  constructor(private readonly WorkService: WorkService) {}


  // 여러개조회 ===================================================  fetchWorks
  @Query(() => [Work])
  fetchWorks() {
    return this.WorkService.findAll();
  }


  // + 한개 조회 -                                              fetchWork
  @Query(() => Work)
  fetchWork(
    @Args('workId') workId: string, //
  ) {
    return this.WorkService.findOne({ workId });
  }


  // 생성 ===================================================  createWork
  @Mutation(() => Work)
  createWork(@Args('createWorkInput') createWorkInput: CreateWorkInput) {
    return this.WorkService.create({ createWorkInput });
  }


  // 수정 ===================================================  updateWork
  @Mutation(() => Work)
  async updateWork(
    @Args('workId') workId: string,
    @Args('updateWorkInput') updateWorkInput: UpdateWorkInput,
  ) {
    // 완결여부 boolean확인
    await this.WorkService.checkisComplete({ workId });
    return await this.WorkService.update({ workId, updateWorkInput });
  }

  
  // 삭제 ===================================================  deleteWork
  @Mutation(() => Boolean)
  deleteWork(@Args('workId') workId: string) {
    return this.WorkService.delete({ workId });
  }


  // 삭제한데이터포함_모든상품조회 =========================== fetchProductsWithDeleted
  @Query(() => [Work])
  fetchProductsWithDeleted() {
    return this.WorkService.findAllWithDeleted();
  }


  // 복구 ==================================================== restoreProduct
  @Mutation(() => Boolean)
  restoreProduct(@Args('workId') workId: string) {
    return this.WorkService.restoreProduct({ workId });
  }
}
