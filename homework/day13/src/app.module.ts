import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { MenuModule } from './apis/menu/menu.module';
import { Menu } from './apis/menu/entities/menu.entity';

@Module({
  // 그래프큐엘 관련
  imports: [
    MenuModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    // 마이에스큐엘 관련
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'myproject03',
      entities: [Menu],
      synchronize: true, // 동기화 시켜주겠다.
      logging: true, // 쿼리문에 대한 로그
    }),
  ],
})
export class AppModule {}

// 셋팅. 모든 서비스 들을 합체시켜서 최종 출력하는 친구. 보통 제일 마지막에 완성됨.
