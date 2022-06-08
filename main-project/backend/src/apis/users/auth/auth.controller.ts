import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../entites/user.entity';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

interface IOAuthUser {
  user: Pick<User, 'email' | 'pwd' | 'name' | 'phoneNum'>;
}

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // GOOGLE 로그인 =========================================================
  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response, //
  ) {
    this.authService.loginSocial(req, res);
  }

  // KAKAO 로그인 ==========================================================
  @Get('/login/kakao')
  @UseGuards(AuthGuard('kakao'))
  async loginKakao(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response, //
  ) {
    this.authService.loginSocial(req, res);
  }

  // NAVER 로그인 ==========================================================
  @Get('/login/naver')
  @UseGuards(AuthGuard('naver'))
  async loginNaver(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response, //
  ) {
    this.authService.loginSocial(req, res);
  }
}

// 원본유지 //

// @Controller()
// export class AuthController {
//   constructor(
//     private readonly userService: UserService,
//     private readonly authService: AuthService,
//   ) {}

//   // GOOGLE 로그인 =========================================================
//   @Get('/login/google')
//   @UseGuards(AuthGuard('google'))
//   async loginGoogle(
//     @Req() req: Request & IOAuthUser, //
//     @Res() res: Response, //
//   ) {
//     let user = await this.userService.findOne({ email: req.user.email });
//     const hashedPassword = await bcrypt.hash(req.user.pwd, 10);
//     if (!user) {
//       user = await this.userService.create({
//         email: req.user.email,
//         hashedPassword,
//         phoneNum: req.user.phoneNum,
//         name: req.user.name,

//       });
//     }

//     this.authService.setRefreshToken({ user, res });
//     res.redirect(
//       'http://localhost:5500/main-project/frontend/login/index.html',
//     );
//   }

//   // KAKAO 로그인 ==========================================================
//   @Get('/login/kakao')
//   @UseGuards(AuthGuard('kakao'))
//   async loginKakao(
//     @Req() req: Request & IOAuthUser, //
//     @Res() res: Response, //
//   ) {
//     console.log('=================================================');
//     // console.log('[여기는authController REQ]', req.user);
//     console.log('=================================================');
//     let user = await this.userService.findOne({ email: req.user.email });
//     const hashedPassword = await bcrypt.hash(req.user.pwd, 10);

//     if (!user) {
//       user = await this.userService.create({
//         email: req.user.email,
//         hashedPassword,
//         phoneNum: req.user.phoneNum,
//         name: req.user.name,
//       });
//     }

//     this.authService.setRefreshToken({ user, res });
//     res.redirect(
//       'http://localhost:5500/main-project/frontend/login/index.html',
//     );
//   }

//   // NAVER 로그인 ==========================================================
//   @Get('/login/naver')
//   @UseGuards(AuthGuard('naver'))
//   async loginNaver(
//     @Req() req: Request & IOAuthUser, //
//     @Res() res: Response, //
//   ) {
//     console.log('=================================================');
//     // console.log('[여기는authController REQ]', req.user);
//     console.log('=================================================');
//     let user = await this.userService.findOne({ email: req.user.email });
//     const hashedPassword = await bcrypt.hash(req.user.pwd, 10);

//     if (!user) {
//       user = await this.userService.create({
//         email: req.user.email,
//         hashedPassword,
//         phoneNum: req.user.phoneNum,
//         name: req.user.name,
//       });
//     }

//     this.authService.setRefreshToken({ user, res });
//     res.redirect(
//       'http://localhost:5500/main-project/frontend/login/index.html',
//     );
//   }
// }
