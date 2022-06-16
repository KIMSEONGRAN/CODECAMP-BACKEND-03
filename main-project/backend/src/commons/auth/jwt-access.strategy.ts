import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'myGuard') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'myAccessKey',
    });
  }

  // 성공하면 실행되는 곳
  // user부분
  validate(payload) {
    // console.log('payload', payload);
    return {
      email: payload.email,
      id: payload.sub,
    };
  }
}
