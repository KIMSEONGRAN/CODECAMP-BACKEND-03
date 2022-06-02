import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Menu } from './entities/menu.entity';
import { MenuService } from './menu.service';
import { CreateStarbucksInput } from './dto/createStarbucks.input';

@Resolver()
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}

  @Query(() => [Menu])
  fetchMenus() {
    // 쿼리문 문법 findAll()
    return this.menuService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    // Args = 아규먼트 :  입력값
    // 플레이그라운드에서 독스 역할을 해주는 친구.
    // (인자로 받을 친구(플레이그라운드기준 노랑이)) 인자는(파랑이) : 스웨거 <= 같은 양식
    @Args('createStarbucksInput') createStarbucksInput: CreateStarbucksInput,
  ) {
    console.log(createStarbucksInput);

    //
    return this.menuService.create();
  }
}

// 실질적으로 쓰는 친구2
// 리졸브는 기능. 합체부품
