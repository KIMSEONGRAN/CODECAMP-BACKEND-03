import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { Token } from "./models/tokenSchema.js";
import { GetuserController } from "./controllers/getUsers.controller.js";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import { PostuserController } from "./controllers/postUsers.controller.js";

const app = express();
app.use(cors());
app.use(express.json());

// 사용하는 API순서대로 API를 만드는게 좋다.
const postUserController = new PostuserController();
app.post("/user", postUserController.checkPhone);
app.post("/user", postUserController.checkUserProfile);
// 회원가입 끝---------------------------------------

// 회원 목록 조회
const getuserController = new GetuserController();
app.get("/users", getuserController.getUserprofile);
// 회원 목록 조회 -----------------------------------------

// 토큰 인증 요청
app.post("/tokens/phone", async (req, res) => {
  const myphone = req.body.phone;
  const isValid = checkValidationPhone(myphone);
  // 핸드폰번호가 양식에 맞지 않을때의 res가 없다.
  // res를 했으면 resturn 절차가 필요하지 않다. return이 없음으로써 값이 달라진다면 로직이 이상한거다. 다시 짜야한다.
  if (isValid) {
    const mytoken = getToken();

    const tokenPhone = await Token.findOne({ phone: myphone });
    if (tokenPhone !== null) {
      await Token.updateOne({ phone: myphone }, { token: mytoken });
    } else {
      const token = new Token({
        token: mytoken,
        phone: myphone,
        isAuth: false,
      });
      await token.save();
    }
    sendTokenToSMS(myphone, mytoken);
    res.send(`핸드폰으로 인증 문자가 전송되었습니다!`);
  }
});

// 인증 완료
app.patch("/tokens/phone", async (req, res) => {
  const phoneResult = await Token.findOne({ phone: req.body.phone });
  if (phoneResult !== null) {
    const token2 = await Token.findOne({ token: req.body.token });
    if (token2 !== null) {
      await Token.findOneAndUpdate({ token: req.body.token }, { isAuth: true });
      res.send(true);
      // return true;
    } else {
      res.send(false);
    }
    res.send(false);
  }
});
mongoose.connect("mongodb://my-database:27017/Mini-Project1");
// mongoose.connect("mongodb://localhost:27017/Mini-Project1");
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
