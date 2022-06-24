import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module';
import { ProductModule } from './apis/products/product.module';
import { UserModule } from './apis/users/user.module';
import { AuthModule } from './apis/auth/auth.module';
import { PointTransactionModule } from './apis/pointTransaction/pointTransaction.module';
import { PaymentMoudle } from './apis/payment/payment/payment.module';
import { FileModule } from './apis/file/file.module';
import * as redisStore from 'cache-manager-redis-store';
import { RedisClientOptions } from 'redis';

@Module({
  imports: [
    AuthModule,
    BoardModule,
    FileModule,
    PointTransactionModule,
    ProductCategoryModule,
    ProductModule,
    PaymentMoudle,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }), // 토큰 생성관련
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'my-database',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mydocker03',
      entities: [__dirname + '/apis/**/*.entity.*'], // 현재 경로(__dirname)에서 apis로 들어가서 그 안에 모든폴더에 들어가서(**) 모든 entity.ts로 끝나는 파일 연결하겠다.
      synchronize: true, // 동기화 시켜주겠다.
      logging: true, // 쿼리문에 대한 로그
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: 'redis://my-redis:6379',
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
