// 주민번호 앞뒤로 - 기준 쪼개기
export function hyphenCheck(number){
  
  if (number.includes('-')) {
    return true;
  } else {
    console.log('에러 발생!!! 형식이 올바르지 않습니다!!!');
    return false;
  }
}


// 주민번호 앞자리 뒷자리 숫자 구성 확인
export function checkNum(number){
    let secuNum = number.split('-');

    if (secuNum[0].length === 6 && secuNum[1].length === 7) {
      console.log(number);
        return true;
      } else {
        console.log('에러 발생!!! 개수를 제대로 입력해 주세요!!!');
      }
}


// 주민번호 뒷자리 *로 바꾸기
export function masking(number){
    let secuNum = number.split('-');

    if (secuNum[0].length === 6 && secuNum[1].length === 7) {
      let a = secuNum[1].replace(/(?<=.{1})./gi, "*");
      return a;
    } 

    
    // if (secuNum[1].length === 7){
    //     let numBack = secuNum[1];
    //       let num2 = numBack[0];
    //       let star = '******';
    
    //       let a = numBack.slice(1);
    //       a = star;
    // } else {
    //     return;
    // }

}
