import express from 'express';
import cors from 'cors'
import { sendTokenToSMS, getToken, checkValidationPhone } from './phone.js';
import {checkValidationEmail,getWelcomeTemplate,sendTemplateToEmail} from './email.js';


const app = express()
app.use(cors());
app.use(express.json());
app.get('/users', (req, res) => {
    const result = [
        { 
            email : "aaa@gmail.com", 
            name : "철수",
            phone : "010-1234-5678",
            personal : "220110-2222222",
            prefer : "https://naver.com"
        },
        { 
            email : "bbb@gmail.com", 
            name : "짱구",
            phone : "010-1444-5333",
            personal : "234110-2222222",
            prefer : "https://nave.com"
        },
        { 
            email : "ccc@gmail.com", 
            name : "유리",
            phone : "010-5932-4333",
            personal : "220110-2222222",
            prefer : "https://naver.com"
        },
        { 
            email : "ddd@gmail.com", 
            name : "훈이",
            phone : "010-3942-2053",
            personal : "220110-2277522",
            prefer : "https://naver.com"
        },
        { 
            email : "eee@gmail.com", 
            name : "맹구",
            phone : "010-5948-4235",
            personal : "220110-2223522",
            prefer : "https://naver.com"
        }
    ]
    
    res.send(result)
  })

  app.get('/starbucks', (req, res) => {
    const cafeResult = [
        { name: '아메리카노', kcal: 5 },
        { name: '카페라떼', kcal: 10 },
        { name: '콜드브루', kcal: 15 },
        { name: '카페모카', kcal: 50 },
        { name: '돌체라떼', kcal: 500 },
        { name: '카라멜라떼', kcal: 200 },
        { name: '바닐라라떼', kcal: 20 },
        { name: '에스프레소', kcal: 1 },
        { name: '디카페인', kcal: 5 },
        { name: '오트라떼', kcal: 300 }
    ]

    res.send(cafeResult);
  })

app.post('/tokens/phone', (req,res) => {
    const myphone = req.body.phone

    const isValid = checkValidationPhone(myphone)
    if (isValid) {
        const mytoken = getToken();

        sendTokenToSMS(myphone, mytoken)
        res.send('인증완료')
    }
})


app.post('/email', (req,res) => {
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