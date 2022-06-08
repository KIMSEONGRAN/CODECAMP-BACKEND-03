import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { writer } from 'repl';
import { BoardService } from './boards.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

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
  createBoard(
    @Args({ nullable: true, name: 'writer' }) writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ) {
    console.log(writer);
    console.log(title);
    console.log(contents);
    console.log(createBoardInput);
    // console.log(args);

    return this.boardService.create();
  }
}
