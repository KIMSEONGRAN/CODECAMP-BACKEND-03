import {
  UnauthorizedException,
  UnprocessableEntityException,
  UseGuards,
} from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../user.service';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { CurrentUser } from 'src/commons/auth/gql-user-param';
import { GqlAuthRefreshGuard } from 'src/commons/auth/gql-auth.guard';
import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import * as jwt from 'jsonwebtoken';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  // 로그인 부분 ===============================================
  // @UseGuards(GqlAuthRefreshGuard)
  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() context: any,
  ) {
    const user = await this.userService.findOne({ email }); // auto

    // 이메일이 일치하는 유저 없으면 에러 던진다.
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다!!');

    // 일치하는 유저는 있되, 비번은 틀린 유저에게 던지는 에러
    // 복호화를해서 비교를 한다.
    const isAuth = await bcrypt.compare(password, user.pwd);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다!!');

    console.log(
      '액세스 토큰-====== ',
      this.authService.getAccessToken({ user }),
    );
    console.log('===================================');
    console.log(
      '리프레쉬 토큰 리졸버-====== ',
      this.authService.setRefreshToken({ user, res: context.req.res }),
    );

    // 리프레쉬 토큰을 만들어둠. 이때 이 토큰이 쿠키에 들어감. 이러고 끝임.
    this.authService.setRefreshToken({ user, res: context.req.res });

    // 로그인시 회원의 아이디와 비밀번호가 검증되면 accessToken을 만들어 클라이언트에게 보내줍니다.
    return this.authService.getAccessToken({ user });
  }

  @UseGuards(GqlAuthRefreshGuard)
  @Mutation(() => String)
  restoreAccessToken(@CurrentUser() CurrentUser: any) {
    return this.authService.getAccessToken({ user: CurrentUser });
  }

  @UseGuards(GqlAuthRefreshGuard)
  @Mutation(() => String)
  async logout(@Context() Context: any) {
    const refresh = Context.req.rawHeaders
      .filter((ele) => {
        return ele.match(/refresh/);
      })[0]
      .split('=')[1];

    const access = Context.req.rawHeaders
      .filter((ele) => {
        return ele.match(/Bearer/);
      })[0]
      .split(' ')[1];

    try {
      // 토큰이 유효한지 체크한다. 키, value값으로 확인.
      jwt.verify(access, 'myAccessKey');
      jwt.verify(refresh, 'myRefreshkey');
    } catch {
      // 유효하지 않으면 에러던지기.
      throw new UnauthorizedException();
    }
    // 레디스에 토큰 저장.
    await this.cacheManager.set(access, 'accessToken', { ttl: 3600 });
    await this.cacheManager.set(refresh, 'refreshToken', { ttl: 3600 * 14 });

    return '로그아웃에 성공했습니다';
  }
}
