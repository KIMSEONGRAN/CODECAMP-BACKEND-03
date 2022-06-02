import { Module } from '@nestjs/common';
import { MenuResolver } from './menu.resolver';
import { MenuService } from './menu.service';

@Module({
  providers: [MenuResolver, MenuService],
})
export class MenuModule {}

// 실질적으로 쓰는 친구1
// 모듈이라는 이름이 들어가면 마지막에 처리하는 용도라고 볼 수 있다.
// 완성품. 최종 합체용도
