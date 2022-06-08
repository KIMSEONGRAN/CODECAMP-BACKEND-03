// import { PayloadTooLargeException } from '@nestjs/common';
// import { Strategy, ExtractJwt } from 'passport-jwt';
// import { Strategy } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import 'dotenv/config';

export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.CLIENT_ID_KAKAO,
      // clientSecret: process.env.CLIENT_SECRET_KAKAO,
      callbackURL: 'http://localhost:3000/login/kakao',
    });
  }

  // 위의 인가에 성공하면 실행되는 곳
  // 구글토큰이 JWT란 보장은 없음
  async validate(accessToken, refreshToken, profile) {
    // 이부분이 req.user로 들어옴
    // console.log('[여기는kakaoStrategy_access]', accessToken);
    // console.log('[여기는kakaoStrategy_refresh]', refreshToken);
    console.log('=================================================');
    console.log('[여기는kakaoStrategy_profile]', profile);
    console.log('=================================================');
    const profile_json = profile._json;

    return {
      id: profile_json.id,
      email: profile_json.kakao_account.email,
      pwd: '183847937592',
      name: profile.displayName,
    };
  }
}
