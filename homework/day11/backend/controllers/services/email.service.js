import nodemailer from "nodemailer";
import "dotenv/config";

// 포스트 유저 관련 API
export class PostMailService {
  // 이메일 체크
  checkValidationEmail = (email) => {
    if (email === undefined || !email.includes("@")) {
      console.log("에러발생. 이메일을 제대로 입력해주세요.");
      return false;
    } else {
      return true;
    }
  };
  // 이메일 체크 끝 /////////////////////////////////////

  // 이메일 템플릿
  // getWelcomeTemplate = ({ name, prefer, phone }) => {
  //   return `
  //             <html>
  //                 <body>
  //                     <div style="display: flex; flex-direction: column; align-items: center;">
  //                         <div style="width: 500px;">
  //                             <h1 style="color: royalblue">${name}님 가입을 환영합니다!!!</h1>
  //                             <hr />
  //                             <div>이름: ${name}</div>
  //                             <div>좋아하는사이트: ${prefer}</div>
  //                             <div>번호: ${phone}</div>
  //                         </div>
  //                     </div>
  //                 </body>
  //             </html>
  //     `;
  // };
  // 이메일 템플릿 끝

  // 이메일 템플릿 전송
  // sendTemplateToEmail = async (email, mytemplate) => {
  //   const EMAIL_USER = process.env.EMAIL_USER;
  //   const EMAIL_PASS = process.env.EMAIL_PASS;
  //   const EMAIL_SENDER = process.env.EMAIL_SENDER;

  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: EMAIL_USER,
  //       pass: EMAIL_PASS,
  //     },
  //   });
  //   const result = await transporter.sendMail({
  //     from: EMAIL_SENDER,
  //     to: email,
  //     subject: "[코드캠프] 가입을 축하합니다!!!",
  //     html: mytemplate,
  //   });
  //   console.log(result);
  // };
  // 템플릿 끝 ////////////////////////////////////////////
}
