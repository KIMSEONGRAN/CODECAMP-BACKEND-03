import express from "express";
const app = express();

// 상품 구매하기
app.post("/products/buy", (req, res) => {
  // 1. 가진 돈을 검증하는 코드(상품 가격보다 갖고있는 돈이 더 큰지 아닌지. 대략 10줄 정도)
  // ...
  // ...
  // ...
  // ...
  // 2. 상품의 판매 여부 검증하는 코드(대략 10줄 정도. 상품이 팔렸는지 아닌지 검증)
  // ...
  // ...
  // ...
  // ...
  // 3. 상품 구매하는 코드
  // 3-1. if(돈있음 && !판매완료){
  //    응답
  //    res.send("상품 구매 완료!!");
  //   }
});

// 상품 환불하기
app.post("/products/refund", (req, res) => {
  // 1. 상품의 판매 여부 검증하는 코드(대략 10줄 정도. 상품이 팔렸는지 아닌지 검증)
  // ...
  // ...
  // ...
  // ...
  // 2. 상품 환불하는 코드
  // 2-1. if(판매완료){
  //   res.send("상품 환불 완료ㅠㅠ");
  //   }
});

app.listen(3000);
