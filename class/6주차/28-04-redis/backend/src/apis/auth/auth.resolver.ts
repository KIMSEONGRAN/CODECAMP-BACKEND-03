import { UnprocessableEntityException, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../users/user.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { CurrentUser } from '../commons/auth/gql-user-param';
import {
  GqlAuthAccessGuard,
  GqlAuthRefreshGuard,
} from '../commons/auth/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService, //
    private readonly authService: AuthService,
  ) {}

  // 2.
  @Mutation(() => String)
  async login(
    @Args('email') email: string, //
    @Args('password') password: string,
    @Context() context: any, // req, res정보가 담겨있는 부분
  ) {
    // 3. 로그인(이메일과 비밀번호가 일치하는 유저를 DB에서 찾기)
    // 이 함수는 user.service.ts에 있다. 위치 잘 찾아라.
    const user = await this.userService.findOne({ email });

    // 4. 일치하는 유저가 없으면 에러를 던지기
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다.');

    // 5.일치하는 유저가 있지만 비밀번호가 틀렸다면? 에러 던지기
    //                      조건 두개 비교하기   ↓
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');

    // 6-1. refreshToken(=JWT) 만들어서 프론트엔드(쿠키)에 보내주기
    this.authService.setRefreshToken({ user, res: context.req.res });
    // console.log('=============================================');
    // console.log('=============================================');
    // console.log(context.req.res);
    // console.log('=============================================');

    // 6-2. 일치하는 유저가 있으면 accessToken(=JWT)을 만들어서
    //    브라우저에 전달하기
    // 실행하면 payload로 받게 되고, refresh토큰은 쿠키를 통해 받게됨.
    return this.authService.getAccessToken({ user });
  }

  // ===============================================================
  // refreshtoken 인가를 위한 가드
  @UseGuards(GqlAuthRefreshGuard)
  @Mutation(() => String)
  restoreAccessToken(@CurrentUser() currentUser: any) {
    // accesstoken 만들기
    return this.authService.getAccessToken({ user: currentUser });
  }
}
