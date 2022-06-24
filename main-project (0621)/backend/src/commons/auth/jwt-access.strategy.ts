import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Cache } from 'cache-manager';
import * as jwt from 'jsonwebtoken';
import { CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'myGuard') {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'myAccessKey',
      passReqToCallback: true,
    });
  }

  // 성공하면 실행되는 곳
  // user부분
  async validate(req, payload) {
    // const rawHeadersInAcessToken = req.rawHeaders
    //   .filter((ele) => {
    //     return ele.match(/Bearer/);
    //   })[0]
    //   .split(' ')[1];
    const accessToken = req.headers.authorization.replace('Bearer ', '');

    const check = await this.cacheManager.get(accessToken);
    if (check) {
      throw new UnauthorizedException();
    }

    return {
      email: payload.email,
      id: payload.sub,
    };
  }
}
