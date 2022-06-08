import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { UserService } from '../users/user.service';
import { JwtRefreshStrategy } from '../commons/auth/jwt-refresh.strategy';

@Module({
  imports: [JwtModule.register({}), TypeOrmModule.forFeature([User])],
  // 1.
  providers: [AuthResolver, AuthService, UserService, JwtRefreshStrategy],
})
export class AuthModule {}
