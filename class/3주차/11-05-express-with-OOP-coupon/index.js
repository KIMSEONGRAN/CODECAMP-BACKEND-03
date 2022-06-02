import express from "express";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import {
  ProductController,
  ProductController,
} from "./mvc/controllers/product.controller.js";
const app = express();

// 상품 API
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct); // 상품구매하기
app.post("/products/refund", productController.refundProduct); // 상품환불하기

// 쿠폰(상품권) API
const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon); // 쿠폰(상품권) 구매하기

app.listen(3000);

/**
 * app.post("/products/buy", productController.buyProduct());
 *                                            ---------------> 이부분에 buyProduct뒤에 ()를 붙이면 함수 실행인데
 *                                                             우리가 11번째 줄에서는 실행을 시킬게 아니라 연결(바인딩) 시킬 것이기 때문에 ()가 빠졌다.
 *                                                             실행은 API 요청이 들어왔을때 된다.
 *
 */
