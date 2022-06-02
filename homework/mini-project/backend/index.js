import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { Token } from "./models/tokenSchema.js";
import { Starbucks } from "./models/starbucksSchema.js";
import { User } from "./models/userSchema.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import {
  getWelcomeTemplate,
  sendTemplateToEmail,
  checkValidationEmail,
} from "./email.js";
import { createBoardAPI } from "./scraping.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

// 사용하는 API순서대로 API를 만드는게 좋다.
// 변수명 명확하게, 중복 변수 제거
// 회원 가입
app.post("/user", async (req, res) => {
  const myuser = { ...req.body };
  const prefer = req.body.prefer;
  const bbb = req.body.personal.substr(0, 7).padEnd(14, "*");
  const og = await createBoardAPI(prefer);
  const ccc = await Token.findOne({ phone: req.body.phone });
  const isValid = checkValidationEmail(myuser.email);
  const user = req.body;

  if (ccc === null) {
    res.status(422).send("에러났다");
  }
  if (ccc.isAuth === false) {
    res.status(422).send("에러났다");
  } else {
    const myuser02 = new User({
      name: myuser.name,
      email: myuser.email,
      personal: bbb,
      prefer: myuser.prefer,
      pwd: myuser.pwd,
      phone: myuser.phone,
      og: og,
    });
    await myuser02.save();

    if (isValid) {
      // 2. 가입환영 템플릿 만들기
      const mytemplate = getWelcomeTemplate(user);

      // 3. 이메일에 가입환영 템플릿 전송하기
      sendTemplateToEmail(user.email, mytemplate);
    }
    res.send(myuser02._id);
  }
});
// 회원가입 끝---------------------------------------

// 회원 목록 조회
app.get("/users", async (_, res) => {
  const result = await User.find();
  res.send(result);
});
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

// 스타벅스 커피 목록 조회
app.get("/starbucks", async (_, res) => {
  const starResult = await Starbucks.find();
  res.send(starResult);
});

mongoose.connect("mongodb://my-database:27017/Mini-Project1");
// mongoose.connect("mongodb://localhost:27017/Mini-Project1");
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
