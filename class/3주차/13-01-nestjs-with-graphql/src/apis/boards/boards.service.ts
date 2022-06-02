import { Injectable } from '@nestjs/common';

// 의존성 주입
@Injectable()
export class BoardService {
  aaa() {
    return 'Hello World!';
  }
}
