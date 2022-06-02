import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'my_database', // 로컬 환경일 경우 localhost
      port: 3306,
      username: 'root',
      password: 'root', // 본인이 설정한 비밀번호
      database: 'myproject', // 변경
      entities: [__dirname + '/apis/**/*.entity.*'], // 변경
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
