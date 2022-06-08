import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entites/user.entity';
import { UserService } from './user.service';
import { UpdateUserInput } from './dto/updateUser.input';
// import { CreateUserInput } from './dto/createUser.input';
import * as bcrypt from 'bcrypt';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser } from 'src/commons/auth/gql-user-param';
import { Any } from 'typeorm';

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
  // @Query(() => User)
  // fetchUser(
  //   @Args('userId') userId: string, //
  // ) {
  //   return this.userService.findOne({ userId });
  // }
  @Query(() => User)
  fetchUser(
    @Args('email') email: string, //
  ) {
    return this.userService.findOne({ email });
  }

  // 수정-----------------------------------------

  // @Mutation(() => User)
  // async updateUser(
  //   @Args('userId') userId: string,
  //   @Args('updateUserInput') updateUserInput: UpdateUserInput,
  // ) {
  //   return await this.userService.update({ userId, updateUserInput });
  // }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  async updatePwd(
    @Args('userId') userId: string,
    @Args('password') pwd: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return await this.userService.update({ userId, pwd, updateUserInput });
  }

  // 생성----------------------------------------------
  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('phoneNum') phoneNum: string,
    @Args('name') name: string,
    @Args('pwd') pwd: string,
  ) {
    const hashedPassword = await bcrypt.hash(pwd, 10);
    return this.userService.create({ email, hashedPassword, phoneNum, name });
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

  // 로그인한 유저비번 변경 =================================
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => String)
  async updateUserPwd(
    @Args('password') pwd: string,
    // ↓ 우리가 만든 데코레이터
    @CurrentUser() CurrentUser: any, // 로그인한 사람 정보 갖고와서 저장. 타입이 any는 아무거나 다 갖고와라. 정말 안될때 사용함.(변수 사항이 많은 경우에 쓴다.)
  ) {
    const { id, ...user } = CurrentUser;
    const hashedPassword = await bcrypt.hash(pwd, 10); // 10은 암호를 더 복잡하게 하려고 쓰는 salt.
    this.userService.updatePwd({ hashedPassword, id, ...user });
    return '비밀번호가 변경되었습니다';
  }

  // 로그인한 유저 조회 ======================================
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  fetchLoginUser(@CurrentUser() CurrentUser: any) {
    console.log('fetchLoginUser 실행 완료!!!');
    console.log('유저정보는??!!!', CurrentUser);
    console.log('======================================');
    console.log(CurrentUser.email);
    return this.userService.findOne({ email: CurrentUser.email });
  }

  // 로그인한 사람 삭제 ======================================
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Boolean)
  async deleteLoginUser(
    @CurrentUser() CurrentUser: any, //
  ) {
    const result = this.userService.deleteUser({ CurrentUser });
    if (result) return true;
  }
}
