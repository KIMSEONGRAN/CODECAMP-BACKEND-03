import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

// 가드를 통과하는지 확인.
// 토큰의 통과여부를 보는 구간
export class GqlAuthAccessGuard extends AuthGuard('myGuard') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    console.log('여기는 guards=====', ctx.getContext().req);
    return ctx.getContext().req;
  }
}

export class GqlAuthRefreshGuard extends AuthGuard('refresh') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
