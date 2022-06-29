import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistModule } from './apis/artists/artist.module';
import { FileModule } from './apis/file/file.module';
import { ImageModule } from './apis/images/image.module';
import { PaymentModule } from './apis/payment/payment.module';
import { AuthModule } from './apis/users/auth/auth.module';
import { UserModule } from './apis/users/user.module';
import { WebtoonModule } from './apis/webtoons/webtoon.module';
import { WorkModule } from './apis/works/work.module';
import { WriterModule } from './apis/writers/writer.module';
import * as redisStore from 'cache-manager-redis-store';
import { RedisClientOptions } from 'redis';

@Module({
  imports: [
    ImageModule,
    WorkModule,
    WebtoonModule,
    WriterModule,
    ArtistModule,
    UserModule,
    AuthModule,
    PaymentModule,
    FileModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }), // 토큰 생성관련
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: 'my_database',
      host: '172.22.208.8',
      // host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root', // 본인이 설정한 비밀번호
      database: 'mydocker', // 변경
      entities: [__dirname + '/apis/**/*.entity.*'], // 변경
      synchronize: true,
      logging: true,
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: 'redis://my-redis:6379',
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
