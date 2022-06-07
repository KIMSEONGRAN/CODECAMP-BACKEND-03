import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  // resolver의 6번과 연결
  // 7. nestJS의 JWT를 설치해야함
  getAccessToken({ user }) {
    // Docs 그대로 사용하는 라이브러리. 이렇게 사용한다는 개념만 익히자
    return this.jwtService.sign(
      // 아래의 부분이 user.resolver의 currentUser에 담긴다
      { email: user.email, sub: user.id }, // 토큰에 담을 정보. 보통은 중요하지 않은 정보를 담는다. 이 데이터를 기준으로 암호화가 되고 복호화(는 아니지만) 판별을 이 데이터로 한다.
      { secret: 'myAccessKey', expiresIn: '1h' }, // 내가 설정한 key와 토큰의 유효시간을 적는다.
    );
  }
}
