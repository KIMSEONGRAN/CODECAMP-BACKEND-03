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

    // 리프레쉬 토큰을 만들어서 쿠키에 저장. 이때 만료기한은 access기한보다 길어야함.
  setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      { email: user.email, sub: user.id },
      { secret: 'myRefreshkey', expiresIn: '2w' },
    );
    console.log("서비스 부분",res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/;`))
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/;`);
  }

  // 인증토큰 =====================================
  getAccessToken({ user }) {
    return this.jwtService.sign(
      // payload!!
      { email: user.email, sub: user.id }, // 토큰에 담길 정보. 안중요한 정보는 얼마든지 담을 수 있음.
      { secret: 'myAccessKey', expiresIn: '1w' }, // JWT보안시켜주는 KEY, 토큰 만료시간
    );
  }

  // 소셜로그인 ===================================

  async loginSocial(req, res) {
    let user = await this.userService.findOne({ email: req.user.email });
    const hashedPassword = await bcrypt.hash(req.user.pwd, 10); // 비밀번호를 암호화하는 과정에서 복잡도를 높여주는 역할을 해줌. 이때 10 이상이 가면 res할때 시간이 매우 오래걸리니까 적당히 쓰셈

    
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
