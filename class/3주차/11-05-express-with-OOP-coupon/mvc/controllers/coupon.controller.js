import { CashService } from "./services/cash.service.js";

export class CouponController {
  buyCoupon = (req, res) => {
    // 1. 가진 돈을 검증하는 코드(구조를 나눔으로써 10줄코드 -> 2줄로 줄임)
    const cashService = new CashService();
    const hasMoney = cashService.checkValue(); // true 또는 false를 return 받는다는 가정.

    // 2. 쿠폰 구매하는 코드
    if (hasMoney) {
      res.send("쿠폰 구매 완료!!");
    }
  };
}
