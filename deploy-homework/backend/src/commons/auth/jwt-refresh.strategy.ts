import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Cache } from 'cache-manager';
import * as jwt from 'jsonwebtoken';
import { CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {
    super({
      jwtFromRequest: (req) => {
        const cookie = req.headers.cookie;
        if (cookie) return cookie.replace('refreshToken=', '');
        // const refreshToken = cookie.replace('refreshToken=', '');

        // return refreshToken;
      },
      secretOrKey: 'myRefreshkey',
      passReqToCallback: true,
    });
  }

  async validate(req, payload) {
    // const rawHeadersInAcessToken = req.rawHeaders
    //   .filter((ele) => {
    //     return ele.match(/Bearer/);
    //   })[0]
    //   .split(' ')[1];
    const refreshToken = await req.headers.cookie.replace('refreshToken=', '');

    const check = await this.cacheManager.get(refreshToken);
    if (check) {
      // 레디스에 토큰 있는지 확인해서 토큰값이 있으면 에러 던진다.
      throw new UnauthorizedException();
    }

    return {
      email: payload.email,
      id: payload.sub,
    };
  }
}
