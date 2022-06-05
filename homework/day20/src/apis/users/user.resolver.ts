import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entites/user.entity';
import { UserService } from './user.service';
import { UpdateUserInput } from './dto/updateUser.input';
import { CreateUserInput } from './dto/createUser.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // 조회 ------------------------------------------------
  // + 여러개 조회
  @Query(() => [User])
  fetchUsers() {
    return this.userService.findAll();
  }

  // + 한개 조회
  @Query(() => User)
  fetchUser(
    @Args('userId') userId: string, //
  ) {
    console.log(userId);
    return this.userService.findOne({ userId });
  }

  // 수정-----------------------------------------

  @Mutation(() => User)
  async updateUser(
    @Args('userId') userId: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return await this.userService.update({ userId, updateUserInput });
  }

  // 생성----------------------------------------------
  @Mutation(() => User)
  createUser(
    @Args('email') email: string,
    @Args('phoneNum') phoneNum: string,
    @Args('name') name: string,
    @Args('pwd') pwd: string,
    // ❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️
    // 질문이 있습니다!!----------------- user.service.ts와 연결됨///
    // @Args('CreateUserInput') createUserInput: CreateUserInput,
    // 이렇게 하면 데이터를 못받아 오는데 왜 그런걸까요? work.resolver.ts에서는
    // 이런식으로 create할때 인자를 통째로 받아와서 썼는데 말이죠.
  ) {
    // return this.userService.create({ createUserInput });
    // ❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️
    return this.userService.create({ email, phoneNum, name, pwd });
  }

  // 삭제 ----------------------------------------------------
  @Mutation(() => Boolean)
  deleteUser(
    @Args('userId') userId: string, //
  ) {
    return this.userService.delete({ userId });
  }

  // 복구 ---------------------------------------------------
  @Mutation(() => Boolean)
  restoreUser(@Args('userId') userId: string) {
    return this.userService.restore({ userId });
  }
}
