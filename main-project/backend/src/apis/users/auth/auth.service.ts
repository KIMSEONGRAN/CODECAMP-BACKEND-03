import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    ) {}

  setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      { email: user.email, sub: user.id },
      { secret: 'myRefreshkey', expiresIn: '2h' },
    );
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/;`);
  }

  // 인증토큰 =====================================
  getAccessToken({ user }) {
    return this.jwtService.sign(
      // payload!!
      { email: user.email, sub: user.id }, // 토큰에 담길 정보. 안중요한 정보는 얼마든지 담을 수 있음.
      { secret: 'myAccessKey', expiresIn: '1h' }, // JWT보안시켜주는 KEY, 토큰 만료시간
    );
  }

  // 소셜로그인 ===================================

  async loginSocial(req, res) {
    let user = await this.userService.findOne({ email: req.user.email });
    const hashedPassword = await bcrypt.hash(req.user.pwd, 10);

    console.log
    if (!user) {
      user = await this.userService.create({
        email: req.user.email,
        hashedPassword,
        phoneNum: req.user.phoneNum,
        name: req.user.name,
      });
    }

    this.setRefreshToken({ user, res });
    res.redirect(
      'http://localhost:5500/main-project/frontend/login/index.html',
    );
  }
}
