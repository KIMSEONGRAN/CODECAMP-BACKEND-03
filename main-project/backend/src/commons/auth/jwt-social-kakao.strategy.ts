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

  /*
    ❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️

    멘토님 질문있습니다.

    아래의 validate의 매개변수인 profile은 무슨 값을 인자로 넣어주기에 우리가
    꺼내서 쓸 수 있는것인가요?

    validate라는 함수를 별도로 실행한 적이 없는데, 여기서 선언후에 바로 profile
    데이터를 받아서 쓸 수 있는데 어디서 값을 받아오기에 가능한 것인가요?                  


    ❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️❌️
  */

  async validate(accessToken, refreshToken, profile) {
    // 이부분이 req.user로 들어옴
    console.log('=================================================');
    console.log('[여기는kakaoStrategy_profile]', profile);
    console.log('=================================================');
    const profile_json = profile._json;


    // 회원가입을 할 경우에는 Entity에 의거해서 데이터를 리턴해주어야 한다.
    // 이 값이 controller의 req로 들어간다
    return {
      id: profile_json.id,
      email: profile_json.kakao_account.email,
      pwd: '183847937592',
      name: profile.displayName,
    };
  }
}

