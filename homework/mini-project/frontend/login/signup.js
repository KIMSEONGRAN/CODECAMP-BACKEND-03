// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  console.log("인증 번호 전송");
  const phoneNum1 = document.querySelector("#PhoneNumber01").value;
  const phoneNum2 = document.querySelector("#PhoneNumber02").value;
  const phoneNum3 = document.querySelector("#PhoneNumber03").value;

  axios.post("http://localhost:3000/tokens/phone", {
    phone: phoneNum1 + phoneNum2 + phoneNum3,
  });
};

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  const phoneNum1 = document.querySelector("#PhoneNumber01").value;
  const phoneNum2 = document.querySelector("#PhoneNumber02").value;
  const phoneNum3 = document.querySelector("#PhoneNumber03").value;
  console.log("핸드폰 인증 완료");
  axios.patch("http://localhost:3000/tokens/phone", {
    token: document.querySelector("#TokenInput").value,
    phone: phoneNum1 + phoneNum2 + phoneNum3,
  });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log("회원 가입 완료");
  const name2 = document.querySelector("#SignupName").value;
  const email2 = document.querySelector("#SignupEmail").value;
  const personal2 = document.querySelector("#SignupPersonal1").value;
  const prefer2 = document.querySelector("#SignupPrefer").value;
  const pwd2 = document.querySelector("#SignupPwd").value;
  const phoneNum1 = document.querySelector("#PhoneNumber01").value;
  const phoneNum2 = document.querySelector("#PhoneNumber02").value;
  const phoneNum3 = document.querySelector("#PhoneNumber03").value;
  const phone2 = phoneNum1 + phoneNum2 + phoneNum3;
  axios.post("http://localhost:3000/user", {
    name: name2,
    email: email2,
    personal: personal2,
    prefer: prefer2,
    pwd: pwd2,
    phone: phone2,
  });
};
