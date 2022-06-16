// import { PayloadTooLargeException } from '@nestjs/common';
// import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import 'dotenv/config';

export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.CLIENT_ID_GOOGLE,
      clientSecret: process.env.CLIENT_SECRET_GOOGLE,
      callbackURL: 'http://localhost:3000/login/google',
      scope: ['email', 'profile'],
    });
  }

  // 위의 인가에 성공하면 실행되는 곳
  // 구글토큰이 JWT란 보장은 없음
  async validate(accessToken, refreshToken, profile) {
    // 이부분이 req.user로 들어옴
    const email_id = profile.emails[0].value.split('@')[0];

    // 회원가입을 할 경우에는 Entity에 의거해서 데이터를 리턴해주어야 한다.
    // 이 리턴값이 controller의 req값으로 들어간다.
    return {
      id: email_id,
      email: profile.emails[0].value,
      pwd: '183847937592',
      name: profile.displayName,
    };
  }
}
