import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

//                                                마이가드 정체는 jwt-access-strategy 에서
export class GqlAuthAccessGuard extends AuthGuard('access') {
  //            ↓ REST API꺼라서 GraphQL껄로 바꿔줘야함 이게 바로 GraphQL용 가드!!
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}

export class GqlAuthRefreshGuard extends AuthGuard('refresh') {
  //            ↓ REST API꺼라서 GraphQL껄로 바꿔줘야함 이게 바로 GraphQL용 가드!!
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
