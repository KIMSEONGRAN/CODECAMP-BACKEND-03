import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { Board } from './entities/board.entity';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject } from '@nestjs/common';

@Resolver()
export class BoardResolver {
  constructor(
    private readonly boardService: BoardService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  // Query는 nestJS의 것과 graphql꺼가 있는데 여기서는 graphql꺼를 사용한다.
  // ↓이렇게 타입을 지정하면 getHello의 리턴타입이 스트링으로 지정된다.
  // @Query(() => String)
  // getHello() {
  //   return this.boardService.aaa();
  // }

  @Query(() => [Board])
  fetchBoards() {
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  async createBoard(
    @Args({ nullable: true, name: 'writer' }) writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ) {
    // 1. 캐시에 등록하는 연습
    await this.cacheManager.set('aaa', createBoardInput, {
      ttl: 0, // 0은 영구저장. default는 5초
    });

    // 2. 캐시에서 조회하는 연습
    const mycache = await this.cacheManager.get('aaa');
    console.log(mycache);

    return '지금은 캐시 테스트중!!';

    // ---- REDIS 테스트를 위한 주석용 ------------------------------ //
    // console.log(writer);
    // console.log(title);
    // console.log(contents);
    // console.log(createBoardInput);
    // // console.log(args);

    // return this.boardService.create();
    // ---- REDIS 테스트를 위한 주석끝 ----------------------------- //
  }
}
