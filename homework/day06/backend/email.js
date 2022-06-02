import { getToday  } from "./utils.js";
import nodemailer from "nodemailer"
import 'dotenv/config'


// 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
export function checkValidationEmail(email){
    if (email.includes('@')) {
        return true;
    } else {
        console.log('에러발생. 이메일을 제대로 입력해주세요.')
        return false;
    }
}


// 2. 가입환영 템플릿 만들기
export function getWelcomeTemplate( { name, phone, likeSite } ){
    // 최신문법 지원여부에 따라서 각 이메일에서 스타일 적용이 다르게 보일 수 있다.
    return `
            <html>
                <body>
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 500px;">
                            <h1 style="color: royalblue">${name}님 가입을 환영합니다!!!</h1>
                            <hr />
                            <div>이름: ${name}</div>
                            <div>전화번호: ${phone}</div>
                            <div>좋아하는 사이트: ${likeSite}</div>
                            <div>가입일: ${getToday()}</div>
                        </div>
                    </div>
                </body> 
            </html>
    `
}


// 3. 이메일에 가입환영 템플릿 전송하기
export async function sendTemplateToEmail(email, mytemplate){
    
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_SENDER = process.env.EMAIL_SENDER;


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        }
    })
    const result = await transporter.sendMail({
        from: EMAIL_SENDER,
        to: email,
        subject: "[코드캠프] 가입을 축하합니다!!!",
        html: mytemplate
    })
    console.log(result);
}