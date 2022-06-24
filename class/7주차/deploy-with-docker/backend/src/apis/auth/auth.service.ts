import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // refresh토큰 생성 ============================================================ setRefreshToken
  // req를 받고 res를 보내주게 된다. => 이런 정보들은 context에 묶여있다.
  // 그래서 context에서 res를 꺼낼 수 있다.
  // 쿠키에 res를 집어넣는다. res할때 쿠키도 같이 나가게 된다.
  setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      { email: user.email, sub: user.id },
      { secret: process.env.REFRESH_TOKEN_KEY, expiresIn: '2w' }, // secret은 accessToken과 다를 수록 좋고 만료기한 또한 길어야한다.
    );
    // > 실제 배포시엔 다음과 같다.
    // 배포환경
    // res.setHeader('Access-Control-Allow-Origin', 'https://myfrontsite.com')
    // res.setHeader(
    //   'Set-Cookie',
    //   `refreshToken=${refreshToken}; path=/; domain=.mybacksite.com; SameSite=None; Secure; httpOnly;`
    // )
    // res의 쿠키의 header 부분에 새로발급한 리프레시토큰 추가
    // > 개발환경 ---- 지금은 간단한 상황 ↓
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/;`); // path 설정 반드시 필요!!(소셜로그인에서)
  }

  // 토큰 생성 ================================================================== getAccessToken

  // resolver의 6번과 연결
  // 7. nestJS의 JWT를 설치해야함
  getAccessToken({ user }) {
    // Docs 그대로 사용하는 라이브러리. 이렇게 사용한다는 개념만 익히자
    return this.jwtService.sign(
      // 아래의 부분이 user.resolver의 currentUser에 담긴다
      { email: user.email, sub: user.id }, // 토큰에 담을 정보. 보통은 중요하지 않은 정보를 담는다. 이 데이터를 기준으로 암호화가 되고 복호화(는 아니지만) 판별을 이 데이터로 한다.
      { secret: process.env.ACCESS_TOKEN_KEY, expiresIn: '1h' }, // 내가 설정한 key와 토큰의 만료기한을 적는다.
    );
  }
}
