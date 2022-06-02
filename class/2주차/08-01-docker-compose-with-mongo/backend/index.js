// const express = require('express')
// phone.js에 있는 모든 걸 한번에 import하고 싶을때는 * as 이름 을 하면 된다.
// import * as qwer from './phone.js';
// import dfsdf from './phone.js'; // 이렇게 쓰면 해당 .js의 default값을 가져온다.

import cors from 'cors';
import express from 'express';
import { sendTokenToSMS, getToken, checkValidationPhone } from './phone.js';
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';

const app = express()
// app.use(cors({
//   // origin의 사이트에 대해서만 허락하고 나머지에선 통신 허락X
//   // ()안에 값을 비워두면 그냥 전체 허락이라는 뜻!
//   origin: "127.0.0.1:5500"
// }));
app.use(cors());
app.use(express.json());
// /api-docs 이쪽으로 이동하면 뒤에꺼를 순서대로 실행한다는 뜻으로 , , 연결
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get('/board', (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    { number: 1, writer: "철수", title: "철수 제목입니다!", contents: "철수 내용이에요!" }, 
    { number: 2, writer: "영희", title: "영희 제목입니다~", contents: "영희 내용이에요~" },
    { number: 3, writer: "훈이", title: "훈이 제목입니다@", contents: "훈이 내용이에요@" }
  ]


  // 2. 꺼내온 결과 응답 주기
  res.send(result)
})

app.post("/board", (req, res) => {
    console.log(req.body);
    // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기


    // 2. 저장 결과 응답 주기
    res.send("게시물 등록에 성공했습니다!!")
})

app.post('/tokens/phone', (req, res) => {
    const myphone = req.body.aaa

  // 1. 휴대폰 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone)
    if(isValid){
      // 2. 핸드폰 토큰 6자리 만들기
      const mytoken = getToken()

      // 3. 핸드폰번호에 토큰 전송하기
      sendTokenToSMS(myphone, mytoken)
      res.send('인증완료!!!')
    }
})

app.post('/users', (req,res) => {
  const user = req.body.myuser;

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkValidationEmail(user.email)
  if(isValid){
    // 2. 가입환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate(user)

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(user.email, mytemplate)
    res.send('가입완료!!!')
  }
})



// listen : 접속을 기다림.
// 종료하지 않는 이상 24시간 켜짐
app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
  })