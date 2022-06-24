import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import 'dotenv/config';

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    super({
      // 쿠키에서 토큰 꺼내기. 쓸만한 내장함수가 없어서 직접 만들어서 씀.
      jwtFromRequest: (req) => {
        const cookie = req.headers.cookie;
        console.log(cookie);
        const refreshToken = cookie.replace('refreshToken=', '');

        return refreshToken; // 최종적으론 리프레쉬토큰만 나가야함. 뒤에 뭐가 오면 안댐.
      },
      secretOrKey: process.env.REFRESH_TOKEN_KEY,
    });
  }

  // 위의 인가에 성공하면 실행되는 곳
  validate(payload) {
    // 서버에 줄 데이터. 이 데이터를 줌으로써 데이터 확인이 된다.
    console.log(payload); // { email: c@c.com, sub: qlkejflqkjef-0lqkf(uuid) }
    return {
      email: payload.email,
      id: payload.sub,
    };
  }
}
