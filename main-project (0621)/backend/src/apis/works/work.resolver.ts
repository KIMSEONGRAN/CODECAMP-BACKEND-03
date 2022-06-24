import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateWorkInput } from './dto/createWork.input';
import { UpdateWorkInput } from './dto/updateWork.input';
import { Work } from './entities/work.entity';
import { WorkService } from './work.service';
import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Resolver()
export class WorkResolver {
  constructor(
    private readonly WorkService: WorkService,
    private readonly elasticsearchService: ElasticsearchService,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  // 여러개조회 ===================================================  fetchWorks
  @Query(() => [Work])
  async fetchWorks(@Args('search') search: string) {
    const cachedData = await this.cacheManager.get(search);
    const arr2 = [];
    for (let i = 0; i < cachedData['hits']['hits'].length; i++) {
      arr2.push(cachedData['hits']['hits'][i]['_source']);
    }
    if (cachedData) {
      return arr2;
    } else {
      const result = await this.elasticsearchService.search({
        index: 'myproject',
        query: {
          // match_all은 전부를 찾아올때, 특정 몇몇개만 찾고싶으면 all 빼기
          // match의 디폴트값은 all이라 전부를 가져온다
          match: {
            title: search,
          },
        },
      });

      const redisData = await this.cacheManager.set(search, result, {
        ttl: 300,
      });
      const arr = [];
      for (let i = 0; i < redisData['hits']['hits'].length; i++) {
        arr.push(redisData['hits']['hits'][i]['_source']);
      }
      console.log('데이터 없을때', arr);
      return arr;
    }
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
