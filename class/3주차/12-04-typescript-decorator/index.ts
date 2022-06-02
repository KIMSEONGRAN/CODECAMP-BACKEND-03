// // 1. public : 어디서든 수정 가능
// class Aaa {
//   constructor(public mypower) {
//     // this.mypower = mypower; // public, private, readonly 중 1개만 포함되면 자동으로 셋팅됨
//   }

//   ggg() {
//     console.log(this.mypower);
//   }
// }
// const aaa = new Aaa(50);
// aaa.mypower = 5; // 밖에서도 가능

// //
// //
// // 2. private : 안에서만 수정 가능
// class Bbb {
//   constructor(private mypower) {
//     // this.mypower = mypower; // public, private, readonly 중 1개만 포함되면 자동으로 셋팅됨
//   }

//   ggg() {
//     console.log(this.mypower);
//   }
// }
// const bbb = new Bbb(50);
// bbb.mypower = 5; // 밖에서 불가능

// //
// //
// // 3. readonly : 읽기 전용
// class Ccc {
//   constructor(readonly mypower) {
//     // this.mypower = mypower; // public, private, readonly 중 1개만 포함되면 자동으로 셋팅됨
//   }

//   ggg() {
//     console.log(this.mypower);
//     this.mypower = 10; // 안에서도 불가능
//   }
// }

function bbb() {
  return function aaa(aaaaaa) {
    console.log("===================================");
    console.log(aaaaaa);
    console.log("===================================");
  };
}
@bbb()
class AppController {}

// function bbb() {
//   return function qqq(age) {
//     return age + "살";
//   };
// }
// bbb()(10); // 10살
