import express from "express";
import { CashService } from "./cash.js";
import { ProductService } from "./product.js";
const app = express();

// 상품 구매하기
app.post("/products/buy", (req, res) => {
  // 1. 가진 돈을 검증하는 코드(구조를 나눔으로써 10줄코드 -> 2줄로 줄임)
  const cashService = new CashService();
  const hasMoney = cashService.checkValue(); // true 또는 false를 return 받는다는 가정.

  // 2. 상품의 판매 여부 검증하는 코드(구조를 나눔으로써 10줄코드 -> 2줄로 줄임)
  const productService = new ProductService();
  const isSoldout = productService.checkSoldout(); // true 또는 false를 return 받는다는 가정.

  // 3. 상품 구매하는 코드
  if (hasMoney && !isSoldout) {
    res.send("상품 구매 완료!!");
  }
});

// 상품 환불하기
app.post("/products/refund", (req, res) => {
  // 1. 상품의 판매 여부 검증하는 코드(대략 10줄 정도. 상품이 팔렸는지 아닌지 검증)
  const productService = new ProductService();
  const isSoldout = productService.checkSoldout(); // true 또는 false 리턴
  // 2. 상품 환불하는 코드
  if (isSoldout) {
    res.send("상품 환불 완료ㅠㅠ");
  }
});

app.listen(3000);
