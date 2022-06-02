// 폰넘버


// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  const phoneNum1 = document.getElementById("PhoneNumber01").value;
const phoneNum2 = document.getElementById("PhoneNumber02").value;
const phoneNum3 = document.getElementById("PhoneNumber03").value;
const phoneNum = phoneNum1 + phoneNum2 + phoneNum3;
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')

  axios.post("http://localhost:3000/tokens/phone", {
    phone: phoneNum
  }).then((res) => {
    console.log(res.data);    
  })
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const phoneNum1 = document.getElementById("PhoneNumber01").value;
const phoneNum2 = document.getElementById("PhoneNumber02").value;
const phoneNum3 = document.getElementById("PhoneNumber03").value;
const phoneNum = phoneNum1 + phoneNum2 + phoneNum3;
  const name = document.getElementById('SignupName').value;
  const securityNum1 = document.getElementsByClassName('SignupInput')[1].value;
  const securityNum2 = document.getElementsByClassName('SignupInput')[2].value;
  const personalNum = [...securityNum1, ...securityNum2];
  const likeSite = document.getElementById('SignupPrefer').value;
  const passWord = document.getElementById('SignupPwd').value;
  const email = document.getElementById('SignupEmail').value;

  console.log(phoneNum);
  axios.post("http://localhost:3000/email", {
    myuser :{
      name: name,
      phone: phoneNum,
      personalNum: personalNum,
      likeSite: likeSite,
      passWord: passWord,
      email: email
    }
  }).then((res) => {
    console.log(res.data);
  })
  console.log('회원 가입 이메일 전송')
}

