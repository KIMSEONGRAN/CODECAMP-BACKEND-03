import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { GqlAuthAccessGuard } from '../commons/auth/gql-auth.guard';
import { CurrentUser, ICurrentUser } from '../commons/auth/gql-user-param';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('age') age: number,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userService.create({ email, hashedPassword, name, age });
  }

  // 0606 추가
  // ↓ 아무나 요청할 수 없기때문에(로그인한 사람만 쓸 수 있음) 방어막 설치해줄꺼임\
  //   방어막을 뚫어야 fetchUser 실행할 수 있음
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => String)
  fetchUser(
    //                ↓ 현재 로그인한 유저를 가르킴. auth.service에 있음.
    @CurrentUser() currentUser: ICurrentUser, //
  ) {
    console.log('fetchUser 실행 완료!!!');
    console.log('유저정보는??!!!', currentUser);
    return 'qqq';
  }
}
