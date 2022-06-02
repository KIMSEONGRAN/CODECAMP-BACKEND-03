import coolsms from "coolsms-node-sdk";
// 핸드폰 관련
export class PostPhoneService {
  // 핸드폰 번호 확인
  checkValidationPhone(myphone) {
    if (myphone.length !== 10 && myphone.length !== 11) {
      console.log("에러 발생‼️ 핸드폰 번호를 제대로 입력 해주세요‼️‼️");
      return false;
    } else {
      return true;
    }
  }
  // 번호 확인 끝///////////////////////////
}
