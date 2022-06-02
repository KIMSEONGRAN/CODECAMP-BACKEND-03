function welcomTemplate( { secuNum, email, phoneNum, site } ){
  const result = `
            <html>
                <body>
                        <h1>코드캠프님 가입을 환영합니다.</h1>
                        <hr />
                        <div>이메일: ${email}</div>
                        <div>주민번호: ${secuNum}</div>
                        <div>휴대폰 번호: ${phoneNum}</div>
                        <div>내가 좋아하는 사이트: ${site}</div>
                </body> 
            </html>
    `;
    console.log(result);
}

let c = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
let d = String(Math.floor(Math.random() * 10000000)).padStart(7, '0');
let f = `${c}-${d}`;

function masking(number){
    let secuNum = number.split('-');
    let b = secuNum[0];
    let a = secuNum[1].replace(/(?<=.{1})./gi, "*");
    return `${b}-${a}`;
  }

const user = {
    secuNum: masking(f),
    email: 'support@codebootcamp.co.kr',
    phoneNum: '000-0000-0000',
    site: 'codebootcamp.co.kr'
}



welcomTemplate(user);