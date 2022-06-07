import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userInfo } from 'os';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  // resolver의 6번과 연결
  // 7. nestJS의 JWT를 설치해야함
  getAccessToken({ user }) {
    return this.jwtService.sign(
      { email: user.email, sub: user.id }, //
      { secret: 'myAccessKey', expiresIn: '1h' },
    );
  }
}
