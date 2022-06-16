console.log("안녕하세요~~");
// import axios from "axios";
// 1번과 2번과 3번이 모두 동일한 뜻인데 코드만 다르다.

// 1.
// axios.post().then((res) => {});
// 2.
// await axios.get();

// 3. 시간 걸리는 작업일 것이다~~
// const aaa = async () => {
//           ↓성공했을때 ↓실패했을떄
//   new Promise((resolve, reject) => {
//     // 뭔가 특정 작업(API 보내기 등)
//     //   if (성공!!) {
//     resolve("철수");
//     //   }
//     //   if (실패!!) {
//     // reject("에러");
//     //   }
//   });
// };

// const fetchDate = () => {
//   console.log("여기는 1번!!");
//   new Promise((resolve, reject) => {
//     // XMLHttpRequest
//     // 뭔가 특정 작업(API 보내기 등)
//     setTimeout(() => {
//       try {
//         resolve("성공시 받는 데이터");
//       } catch (error) {
//         reject("실패했습니다");
//       }
//     }, 2000);
//   }).then((res) => {
//     console.log("여기는 2번");
//   });
//   console.log("여기는 3번");
// };

// await는 promise 앞에서 붙이는게 가능하다.
// 순차적으로 기다렸다 내려가게 하려면 이렇게 해야한다.
const fetchData = async () => {
  console.log("여기는 1번!!");
  await new Promise((resolve, reject) => {
    // XMLHttpRequest
    // 뭔가 특정 작업(API 보내기 등)
    setTimeout(() => {
      try {
        resolve("성공시 받는 데이터");
      } catch (error) {
        reject("실패했습니다");
      }
    }, 2000);
  });
  console.log("여기는 3번");
};

fetchData();
