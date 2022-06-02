import cors from 'cors';
import express from 'express';
import { Db } from 'mongodb';
import mongoose from 'mongoose';
import { Token } from './models/token.model.js';
import { sendTokenToSMS, getToken, checkValidationPhone } from './phone.js';


const app = express();
app.use(cors());
app.use(express.json());

app.patch('/tokens/phone', async (req, res) => {
    const myphone2 = req.body.phone
    const mytoken2 = req.body.token
    const result = await Token.findOne({phone: myphone2})
    res.send(result)
    if(result !== null ) {
        const result2 = await Token.findOne({token: mytoken2});
        if(result2 !== null){
            await Token.findOneAndUpdate({token: mytoken2}, {isAuth: true})
            res.send(true)
            return true;
        } else {
            res.send(false);
        }
        res.send(false);
    }
  })



app.post('/tokens/phone', async (req, res) => {
    const myphone = req.body.phone
  // 1. 휴대폰 자릿수 맞는지 확인하기

  const isValid = checkValidationPhone(myphone)
    if(isValid){
      // 2. 핸드폰 토큰 6자리 만들기
      const mytoken = getToken()

    //   const tokens = new Token({
    //     token: mytoken,
    //     phone: myphone,
    //     isAuth: false
    // })
    // await tokens.save()

      const tokenPhone = await Token.findOne({phone:`${myphone}`});
      if (tokenPhone !== null) {
          await Token.updateOne(
              { phone: myphone },
              { token: mytoken },
          );
      } else {
          const token = new Token({
              token: mytoken,
              phone: myphone,
              isAuth: false
          })
          await token.save();
    }
    
    
      
      // 3. 핸드폰번호에 토큰 전송하기
      sendTokenToSMS(myphone, mytoken)
      res.send(`${myphone}으로 인증 문자가 전송되었습니다.`)
    }
})

mongoose.connect('mongodb://my-database:27017/dockerHomework');


app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
  })