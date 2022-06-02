import express from "express";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { ProductService } from "./mvc/controllers/services/product.service.js";
import { CashService } from "./mvc/controllers/services/cash.service.js";
import { PointService } from "./mvc/controllers/services/point.service.js";

const app = express();

const cashService = new CashService(); // new 한번으로 모든 곳에서 재사용 가능(싱글톤패턴)
const productService = new ProductService();
const pointService = new PointService(); // 쿠폰 구매 방식이 포인트 결제로 변경됨

// 상품 API
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct); // 상품구매하기
app.post("/products/refund", productController.refundProduct); // 상품환불하기

// 쿠폰(상품권) API
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.buyCoupon); // 쿠폰(상품권) 구매하기

app.listen(3000, () => {
  console.log("listening...");
});

/**
 * app.post("/products/buy", productController.buyProduct());
 *                                            ---------------> 이부분에 buyProduct뒤에 ()를 붙이면 함수 실행인데
 *                                                             우리가 11번째 줄에서는 실행을 시킬게 아니라 연결(바인딩) 시킬 것이기 때문에 ()가 빠졌다.
 *                                                             실행은 API 요청이 들어왔을때 된다.
 *
 */
