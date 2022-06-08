import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistModule } from './apis/artists/artist.module';
import { AuthModule } from './apis/users/auth/auth.module';
import { UserModule } from './apis/users/user.module';
import { WorkModule } from './apis/works/work.module';
import { WriterModule } from './apis/writers/writer.module';

@Module({
  imports: [
    WorkModule,
    WriterModule,
    ArtistModule,
    UserModule,
    AuthModule,
    // ProductCategoryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }), // 토큰 생성관련
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
