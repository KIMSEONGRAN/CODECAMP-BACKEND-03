import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext, ID } from '@nestjs/graphql';

//                                                      ↓ 변수명   : 그래프큐엘 타입
export const CurrentUser = createParamDecorator((data, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context); // JWT에 있는 정보에서 
  return ctx.getContext().req.user; // user는 auth.resolver에서 내가 담은 변수값이다. ctx에서 req에서 user을 가져온다.
});
