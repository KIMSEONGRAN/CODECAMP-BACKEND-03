import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import 'dotenv/config';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.ACCESS_TOKEN_KEY,
    });
  }

  // 위의 인가에 성공하면 실행되는 곳
  validate(payload) {
    // 서버에 줄 데이터. 이 데이터를 줌으로써 데이터 확인이 된다.
    console.log(payload); // email: c@c.com, sub: qlkejflqkjef-0lqkf(uuid)
    return {
      email: payload.email,
      id: payload.sub,
      age: 13,
    };
  }
}
