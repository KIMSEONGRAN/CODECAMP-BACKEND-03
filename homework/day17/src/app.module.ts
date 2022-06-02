import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkModule } from './apis/works/work.module';

@Module({
  imports: [
    WorkModule,
    // ProductCategoryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: 'my_database',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678', // 본인이 설정한 비밀번호
      database: 'myproject', // 변경
      entities: [__dirname + '/apis/**/*.entity.*'], // 변경
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
