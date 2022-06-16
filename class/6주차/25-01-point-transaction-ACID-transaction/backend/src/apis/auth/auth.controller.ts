import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { User } from '../users/user.entity';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';

interface IOAuthUser {
  user: Pick<User, 'email' | 'password' | 'name' | 'age'>;
}

@Controller()
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}
  @Get('/login/google')
  @UseGuards(AuthGuard('google')) // 구글로그인 검증 : 요청들어오면 여기서 구글로그인화면으로 변경시켜줌.
  async loginGoogle(
    @Req() req: Request & IOAuthUser, // IOAuthUser 타입추가
    @Res() res: Response,
  ) {
    // 1. 가입확인
    let user = await this.userService.findOne({ email: req.user.email });

    // 2. 회원가입
    if (!user) {
      user = await this.userService.create({
        email: req.user.email,
        hashedPassword: req.user.password, // 소셜에선 비번 의미없음. 입력안하니까.
        name: req.user.name,
        age: req.user.age,
      });
    }

    // 3. 로그인 : 구글에서 인가 받았지만 우리 자체의 토큰 받아서 우리사이트에 직접한것처럼 한번더 로그인
    this.authService.setRefreshToken({ user, res });

    // 브라우저 화면을 다른 페이지로 전환시켜줌
    // 우리는 페이지가 없으므로 성공하면 본래 페이지 다시 보여주기로 함.
    res.redirect(
      'http://localhost:5500/class/21-03-login-google/frontend/social-login.html',
    );

    // 구글로그인 진행
    // 1. 구글 strategy 만들기
    // 2. 구글 로그인 만들기
    // 3. 모듈에 입력하기.
  }
}
