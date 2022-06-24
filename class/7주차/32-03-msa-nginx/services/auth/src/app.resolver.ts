import { AppService } from './app.service';
import { Mutation, Resolver, Query } from '@nestjs/graphql';
@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  // @Get('/aaa')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Query(() => String)
  aaa() {
    return 'aaa';
  }

  @Mutation(() => String)
  login() {
    return 'login 성공!!';
  }
}
