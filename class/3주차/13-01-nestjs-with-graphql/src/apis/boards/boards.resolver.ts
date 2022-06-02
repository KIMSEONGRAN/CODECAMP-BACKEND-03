import { Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  // Query는 nestJS의 것과 graphql꺼가 있는데 여기서는 graphql꺼를 사용한다.
  // ↓이렇게 타입을 지정하면 getHello의 리턴타입이 스트링으로 지정된다.
  @Query(() => String)
  getHello() {
    return this.boardService.aaa();
  }
}
