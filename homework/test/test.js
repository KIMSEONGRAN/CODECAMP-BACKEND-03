// let str = 'age';

// const obj = {
//   "name" : '철수',
//   "age" : 12,
//   "school" : {
//     "name" : "다람쥐초"
//   }
// }

// obj.name;
// obj["name"];
// obj[str]; // []를 사용하는 방식은 객체에 데이터가 무수히 많을때 키값의 이름이 계속 달라질때 동적으로 데이터를 찾아서 가져올때 사용한다.
// obj.age;
// obj["age"];
// obj.school;
// obj.school.name;

// --------------------------------------

// const student = {}
// // student.name = '철수';
// student["name"] = '철수';
// console.log(student)
// --------------------------------------

// const student = {
// 	name: "철수",
// 	age: 8,
// };

// const school = {
// 	name: "다람쥐초등학교",
// 	teacher: "다람이",
// }
// student.school = school;
// console.log(student);


// const arr = [ 1, 2, 3 ];
// student.arr = arr;
// console.log(student);
// --------------------------------------
// let a = new Date();
// let b = a.getMonth();
// console.log(c);

// function days(month) {
// 	if(b === month) {
// 		console.log(a.getDate());
//   }
// }
// days(4);

//----------------------------------------------

// function masking(number){
//     let secuNum = number.split('-');
//   let a = secuNum[1].slice(-6);
//   let b = a.padStart(secuNum.length, '*');
//   console.log(a);
//   console.log(b);

// }

// masking('250035-2040396');

//------------------------------------------------

// function masking(number){
//   let secuNum = number.split('-');
//   let b = secuNum[0];
//   let a = secuNum[1].replace(/(?<=.{1})./gi, "*");
// return `${b}-${a}`;

// }

// masking('250035-2040396');


// let a = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');

// console.log(a);


// ---------------------------------------------------------

// function temperature(num){
// 	if(num < 19) {
// 		console.log('조금 춥네요')
// 	} else if (num > 23) {
// 		console.log('조금 덥습니다')
// 	} else {
// 		console.log('날씨가 좋네요')
// 	}
// }

// temperature(27)

//-----------------------------------------------------------

// function calculator(num1, num2, operator){
// 	if (operator === "+") {
// 		console.log(num1+num2)

// 	} else if(operator ==="-") {
// 		console.log(num1-num2)

// 	} else if(operator ==="*") {
// 		console.log(num1*num2)
// 	} else if(operator ==="/") {
// 		console.log(num1-num2)
// 	} else {
// 		console.log('올바른 입력이 아닙니다');
// 	}
// }

// calculator(10,5, '+');
// calculator(10,5, '-');
// calculator(10,5, '*');
// calculator(10,5, '/');
// calculator(10,5, 'a');

//--------------------------------------------------------

// const student = {
//   name: 'a',
//   age: 'b',
//   c: 'd'
// }
// student.p = 'f';

// student.name = student.name.toUpperCase();
// student

//------------------------------------------------------------
// true를 대신해서 쓸 수 있는 문자열, 객체, 0이 아닌 숫자등을 truthy하다고 한다.
// 반대는 falsy하다고 한다.

// if (-1){
//   console.log(true);
// } else {
//   console.log(false);
// }
//--------------------------------------------------------------

// function evenOdd(num) {
// 	if(num === 0) {
// 	   console.log('Zero');
// 	} else if (num%2 === 0) {
// 		console.log('even');
// 	} else {
//       console.log('odd');
// 	}
// }

// evenOdd(121);

// --------------------------------------------------------------

// for (let i= 0; i < 5; i = i + 1){
//   if(i === 2){
//     continue;
//     // i가 2가 되는 순간 그 구간은 잠시 멈췄다가 다음으로 넘어간다.    
//   }
//   console.log(i);
// }

// --------------------------------------------------------------

// for (let i= 0; i < 5; i = i + 1){
//   if(i === 2){
//     break;
//     // i가 2가 되는 순간 멈추기 때문에 2부터 그 뒤는 반복되지 않는다.
//     // 반복문 작동 중 찾는 데이터가 나올때 뒤를 검증하지 않을때 쓴다.
//   }
//   console.log(i);
// }

// ---------------------------------------------------------------
// arr = [1,2,3,4,5];
// obj = {name: '철수', age: 12}
// for ( let key in obj ) {
//   console.log(key, obj[key])
// }

// ---------------------------------------------------------------
// for of는 속도가 타 반복문에 비해 느린 속도를 갖는다는 이슈가 있다.
// str = '제 이름은 철수입니다';
// for(let key of str){
//   console.log(key);
// }

// for ( let i = 0; i < str.length; i = i + 1) {
//   console.log(str[i])
// }

// ------------------------------------------------------------------
// arr = ['a','b','c','d','e','f'];
// // 반복할 수 만큼 무조건 실행한다.
// // arr.forEach( function(el) {
// //   console.log(el);
// // })
// arr.forEach(el => console.log(el));
// ------------------------------------------------------------------
// for문은 반복횟수가 정해져 있을때 보통 많이 쓴다.
// for (let i = 0; i < 5; i = i+1){
//   console.log(i)
// }

// // while은 반복횟수가 정해져 있지 않을때 무한히 돌릴때 보통 쓴다. 단 계속 돌면 과부하 걸리니까 잘 끊어줘야한다.
// let i = 0; // 최초식
// while( i !== 5){ // 조건식
//   console.log(i);
//   i = i + 1; // 증감식
// }

// -----------------------------------------------------------------

// function countLetter(str){
//   str = str.toLowerCase();
//   let count = 0;
  
//   for ( let i = 0; i < str.length; i++ ) {
//     if( str[i] === 'a') {
//       count++;
//     }
//   }
//   console.log(count)
// }
// countLetter('A day without laughter is a day wasted.');

// -------------------------------------------------------

// function makeOdd(num) {
// 	let str = '';
  
//   for (let i = 1; i <= num; i++){
//     if(i % 2 === 1) {
//       str += i;
//     }
//   }
//   console.log(str)
// }
// makeOdd(5);
// -----------------------------------------------------------------


// function solution(arr) {
//   let sum = 0;


//   for (let i = 0; i < arr.length; i++) {
//     let a = Number(arr[i]);
//     // a는 1,3 그리고 두개의 NaN(2w, qwer) 값이다.
//     console.log(a)
//     console.log(arr[i]);
 
//     if(Number.isNaN(a) === false){
//       // a가 NaN가 아닐때
//       sum += a;
//     }
//   }

//   return sum;
// }

// const arr = ['1', '2w', '3', 'qwer'];

// const result = solution(arr);

// console.log(result); // 4

//------------------------------------------------------------------
// let count = 0;

// function solution(element, index, array) {
	
//   if(element%2 === 0){
//     count++
//   }
  
// }

// const arr = [1, 2, 3, 4, 5];

// arr.forEach(solution);

// console.log(count); // 2
// ------------------------------------------------------------------
// function solution(element, index, array) {
//   // console.log(array);
//   // 여기에서 작업하세요.
//   if(array.includes('null')){
//     console.log("400 ERROR");
//   }
// }

// const inputs = {
//   name: '코캠',
//   title: null,
//   contents: '안녕하세요.'
// };

// Object.values(inputs).some(solution);
// -------------------------------------------------------------------

// function grade(score) {
// 	if (score >= 90 && score <= 100) {
//     console.log('A')
//   } else if (score >=80 && score < 90){
//     console.log('B')
//   } else if (score >=70 && score < 79){
//     console.log('C')
//   } else if (score >=60 && score < 69){
//     console.log('D')
//   } else if (score <= 59 && score === 0){
//     console.log('F')
//   } else {
//     console.log('잘못된 점수입니다')
//   }
// }

// grade(-10);

// ----------------------------------------------------------------------

// function bigNum(str) {
//   let biggest = Number(str[0]); //  기준점을 잡기위해 0이 아닌 Number(str[0])을 넣는다.
//   // 자기자신을 비교하지 않기 위해서 i = 1부터 시작한다. 이러면 반복문이 한번 덜 도니까 효율적이다.
// 	for(let i = 1; i < str.length; i++){
//     if( Number(str[i]) > biggest ){
//       biggest = Number( str[i] );
//     }
//   }
//   return biggest
// }

// // bigNum("12345")
// bigNum("87135")

// ------------------------------------------------------------------

// function grade (score){
//   // 예외 처리를 제일 상단에 해줘라!
//   if (score > 100 || score < 0) {
//     console.log('잘못된 점수입니다!');
//   } else if (score >= 90) {
//     console.log('A')
//   } else if (score >= 80) {
//     console.log('B')
//   } else if (score >= 70) {
//     console.log('C')
//   } else if (score >= 60) {
//     console.log('D');
//   } else if(score <= 59) {
//     console.log('F')
//   }
// }

// grade(80);

// ------------------------------------------------------------------

// const myShopping = [
// 		{ category: "과일", price: 12000　},
// 		{ category: "의류", price:10000　 },
// 		{ category: "의류", price: 20000　},
// 		{ category: "장난감", price: 9000 },
// 		{ category: "과일", price: 5000　 },
// 		{ category: "의류", price: 10000  },
// 		{ category: "과일", price: 8000　　},
// 		{ category: "의류", price: 7000　　},
// 		{ category: "장난감", price: 5000  },
// 		{ category: "의류", price: 10000　 },
// ]
// let count = 0; // 구매한 총 횟수
// let amount = 0; // 구매한 총 금액
// let grade = ""; // 등급

// for (let i = 0; i < myShopping.length; i++) {
//   // console.log(myShopping[i].category, myShopping[i]);
//   if(myShopping[i].category === '의류'){
//     count++; // 구매한 횟수를 하나 늘려준다.
//     amount += myShopping[i].price;
//   }
  
//   if( count <= 2){
//     // 0~2개
//     grade = "Bronze"
//   } else if (count <= 4) {
//     grade = 'Silver'
//   } else {
//     grade = 'Gold'
//   }
// }

// console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다.`)

// ----------------------------------------------------------------------
// 프로그래머스 - 핸드폰번호 가리기 2번째 풀이
// function solution(phone_number){
//   let answer = "";
  
//   answer = answer.padStart( phone_number.length - 4, "*");
//   answer += phone_number.substring(phone_number.length - 4)
  
//   return answer;
// }

// solution("01033334444");
// --------------------------------------------------------------------
// function solution(num) {
//     var answer = '';
    
//     if(num%2 === 0) {
//         return 'Even'
//     } else {
//         return 'Odd'
//     }
  
//   // 삼학연산자를 쓰면 위의 코드를 아래처럼 줄일 수 있다.
//   // return num % 2 === 0 ? "Even" : "Odd"
// }
// solution(0);
// ------------------------------------------------------------------
// 프로그래머스 평균 구하기 ref2탄
// let arr = [1,2,3,4];

// function solution(arr){
//   const sum = arr.reduce((acc, cur) => {
//     return acc + cur;
//   },0)
//   return sum / arr.length;
// }
// solution(arr);


// acc는 reduce안에서 누적값을 뜻한다.
// cur
// arr.reduce((acc, cur) => {
//   console.log(acc, cur)
//   return acc + cur;
// }, 0);

// 0은 초기값으로 0 데이터를 제일 먼저 가져오게 된다.
//---------------------------------------------------------------------
// 가운데 글자 가져오기 ref2

// function solution(s) {
//   const center = Math.floor(s.length / 2);
//   return s.length % 2 === 1
//     ? s[ center ] // 홀수인 경우는 가운데 있는 글자 하나만 뽑아온다.
//   	: s.substring(center - 1, center + 1)// 짝수인 경우는 가운데 두글자를 뽑아온다.
// }
// -------------------------------------------------------------------
// 서울에서 김서방찾기 ref2
// function solution(seoul) {
//   let x = 0; // kim의 인덱스 값을 저장하는 변수
  
//   for(let i = 0; i < seoul.length; i++){
//     if(seoul[i] === "Kim"){
//       x = i;
//       break;
//     }
//   }
//   return `김서방은 ${x}에 있다`
// }
// -----------------------------------------------------------------
// isNaN(1234)
// Number.isNaN(1234) // false :숫자가 맞다(=== NaN값이 아니다)

// isNaN("1 2")
// Number.isNaN("1 2")

// isNaN("a")
// Number.isNaN(Number("a")) // true : 숫자가 아니다(=== NaN값이다.)

// isNaN("123a")

// Number(undefined)
// isNaN(undefined)
// Nuber.isNaN(undefined)

// isNaN // 넘겨준 인자가 숫자 타입이 맞는지를 검증
// Nuber.isNaN // 넘겨준 인자가 NaN값이 맞는지를 검증
// -------------------------------------------------------------------
// 프로그래머스 문자열 다루기 기본 ref2
// function solution(s){
//   // 1,2,3,5,7,8
//   if (s.length !== 4 && s.length !== 6){
//     return false;
//   }
//   const answer = s.split('')
//   								.filer(function (el){
//     							// 문자열의 타입이 문자인 경우만 남긴다.
//     							// isNaN의 결과가 true값이 경우
//     							return isNaN(el)
//   								})
//   // filter로 걸러진 결과의 길이가 0인지를 판단
//   // -이 아니라면, 문자열에 숫자가 아닌 문자가 있다고 판단
//   return answer.length === 0;
  
// }
// -------------------------------------------------------------------
// 약수의 합 ref2
// function solution(n) {
//     let answer = n;
    
//   // 자기자신을 2로 나눈값 이상으로 약수가 나올 수 가 없기때문에 나누는것이다.
//   // 이러면 반복문이 절반정도 덜 돌기때문에 효율적이다.
//     for(let i = 1; i <= n / 2; i++){
//         if(n % i === 0){
//             answer+= i;
//         }
//     }
//     return answer;
// }
// 약수의 합 ref3
// function solution(n) {
//   const answer = new Array(n)
//                   .fill(1)
//   								.reduce((acc, cur, i) => {
//                     console.log(acc, cur+i)
//                     return acc;
//                   }, 0)
// }
// function solution(n) {
//   const answer = new Array(n)
//                   .fill(1)
//   								.reduce((acc, cur, i) => {
//                     const num = cur + i;
//                     return acc + (n % num === 0
//                                  ? num
//                                  : 0
//                                  )
//                   }, 0)
// 		return answer;
//   }
// --------------------------------------------------------------
// let arr = [87, 89, 92, 100, 76];
// let answer = Array.from({length: arr.length}, () => 1)

// for (let i = 0; i < arr.length; i++){
//   console.log('첫번째 반복문', i);
//   for(let j = 0; j < arr.length; j++){
//     if(arr[i] < arr[j]){
//       console.log('i', i);
//       console.log('j',j);
//       answer[i]++;
//     }
//   }
// }

// console.log(answer);
// --------------------------------------------------------------

// num = 10;
// String(num);
// num.toString();

// String(123);
// num2 = 123;
// num2.toString();
// ---------------------------------------------------------

// 아스키코드
// "a".charCodeAt();
// "b".charCodeAt();

// "b" > "a"
// // "b" > "a"는 98 > 97와 같다. 유니코드 번호에 의해
// "b" < "a"

// arr = [1,2,10,3,6]
// arr.sort((a,b) => {
//   console.log(a, b);
//   return a > b ? 1 : -1
// });

// arr2 = ["a","c","z","x","d"]
// arr2.sort((a,b) => {
//   console.log(a, b);
//   return a > b ? 1 : -1
//   // return a - b 와 위 문장은 같다. 이 문장은 근데 값이 넘버일때만 쓸 수있다. 문자와 숫자 정렬은 윗 문장을 써라.
// });
// console.log(arr2); // [ 'a', 'c', 'd', 'x', 'z' ]
// --------------------------------------------------------
// function moneyCollector(str) {
//     // 여기에 코드를 작성하세요
//     for (let i = 0; i < str.length; i++){
//         if(str[i] === '$'){
//             return str[i]
//         } else {
//             return '찾을 수 없음'
//         }
//     }
// }

// moneyCollector("이 물건은 5$ 입니다.");

// function idxString(num) {
//     // 여기에 코드를 작성하세요
//   let arr = [];
//   if( num >= 0) {
//     for(let i = 0; i <= num; i++){
//       	arr.push(i);
//     }
//   } else {
//     for(let i = 0; i >= num; i--){
//       arr.push(i);
//     }
//   }
//   return arr.join('');
// }
// idxString(11)

// function fac(num) {
//     // 여기에 코드를 작성하세요
//     let sum = 1;
//     for(let i = 1; i <= num; i++){
//         sum *= i
//     }
//   return sum;
// }
// fac(10);

// ---------------------------------------------------------
// 두개뽑아서 더하기-프로그래머스
// const arr = new Set();

// arr.add(1)
// arr.add(2)

// // 조회
// arr.has(1)
// arr.has(3)

// // length
// console.log(arr.size)

// // 반복문
// arr.forEach( el => {
//   console.log(el)
// });

// // 데이터 제거
// arr.delete(2);
// arr

// // 초기화
// // arr.clear();
// // arr

// // set => 배열로 전환
//  // Array.from(arr).reduce((acc, cur) => {
//  //   console.log(acc, cur)
//  // }) 

// // 스프레드 연산자로 변환
// console.log([...arr])
//---------------------------------------------------------
// function solution(arr1, arr2) {
//     var answer = [];

//     for(let i=0; i<arr1.length; i++){
//         let temp = [];
//         for(let j=0; j<arr1[i].length; j++){
//             temp.push(arr1[i][j] + arr2[i][j])
//         }
//         answer.push(temp)
//     }

//     return answer;
// }
// solution([[1],[2]], [[3],[4]])

// let arr1 =[]
// let count = 1;
// let row = 3;
// let col = 5;
// for (let i = 0; i<row; i++){
//   let arr2 =[]
//   for (let j = 0; j < col; j++){
//     arr2.push(count)
//   	count++;
//   }
// }
// arr2

// function seatNumber(row, col) {
//   // 여기에 코드를 작성하세요

//   let x = [];
//   let count = 1;
//   for (let i = 0; i < row; i++) {
//     let h = [];
//     for(let j = 0; j < col; j++){
//       h.push(count);
//       count++
//       console.log('저는', h)
//     }
//     x.push(h)
//   }
//   console.log("나는", x);
// }
// seatNumber(3, 5);
// ------------------------------------------------------
/* 

    문제
    
    임의의 문자열을 입력받아, 문자열에 각 단어가 몇번 등장하는 지 기록한 객체를 리턴하는 함수를 완성하세요
    - 알파벳 및 공백이 포함될 수 있는 string이 입력됩니다. 공백은 한 칸 이상입니다.
    - 단어가 존재하지 않는 경우, 빈 객체를 리턴해야 합니다.
    - 대소문자를 구분하지 않아야 합니다.
    - str.trim 사용은 금지됩니다.

    ----

    출력 예시

    wordFinder("this is the MOMENT, THIS IS THE day")를 입력받은 경우

    {
        this : 2,
        is : 2,
        the : 2,
        moment : 1,
        day : 1
    }

    과 같이 결과를 리턴해야 합니다.
    
*/


// function findGold(arr) {
//   // 여기에서 작업하세요.
//   let count1 = 0;
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let arr2 = [];
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i][j] === "G") { 
//         arr2.push(i);
//         arr2.push(arr[i].indexOf("G"));
//       }
//     }
//     if (arr2.length !== 0) {
//       result.push(arr2);
//     }
//   }
  
// // 	if(result.length !== 1) {
// //     return result  
// //   } else {
// //     return result[0]
// //   }
  
  
//   return result.length !== 1 ? result : result[0] 

	
  
// }

// console.log(findGold([
//   ["N", "N", "N", "G"],
//   ["N", "N", "G", "N"],
//   ["N", "N", "N", "N"],
//   ["N", "G", "N", "N"],
// ]))

////////////////////////////////////////////////////////
// let arr =["a", "b", "c", "d", "e"]
// function a (data) {
//   let b = []
//   for(let i = 0; i < arr.length; i++ ){
//   	console.log(b.push(data[i]+"a"))
//   }
//   console.log(b)
// }
// a(arr);
// ---------------------------------------------------
// "a" > "b"
// -----------------------------------------------------
// for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] == target) {
//                 console.log(i, j)
//                 }
//             }  
// 
// 
// let map = new Map()
// let key = 3
// let val = 5
// console.log('맵셋', map.set(key,val))
// map.set(2,4)
// console.log('이건 맵겟', map.get(2))

// var twoSum = function(nums, target) {
//     let map = new Map(); // 새로운 빈 객체를 만든다.
//   	let i = 0;
//   for(; i < nums.length; i++){
//     if(map.get(target-nums[i]) === undefined){
//       map.set(nums[i], i)
//     } else {
//       return [map.get(target-nums[i]), i]
//     }
//   }
    
// }
// twoSum([3,2,4], 6)
///////////////////////////////////////////////////////////////////////////

// function WhatIsRecursion_02(count) {
//   let sum = 0;
//   if(count === 0){
//     return sum;
//   }

//   function recursion(a) {
//     sum += 2
//    	if(a === 1) {return sum}
    
//     return recursion(a-1);
//   }
//   return recursion(count);
// }
// WhatIsRecursion_02(0);


// var search = function(nums, target) {
//   if(true) {
//     console.log(nums.length / 2)
//   }
    
// };
// search([-1,0,3,5,9,12], 9)
////////////////////////////////////////////////////////////////////////
// 프로그래머스 과제중---------------------------------
// function solution(participant, completion) {
//     let a = new Set(participant);
//   	let b = new Set(completion);
  
  
//   let arr3 = participant.filter(x => b.has(x));
//   console.log(arr3);
  
  
// //   let arr3 = new Set([...a].filter(x => !b.has(x)));
  
// //   console.log([...arr3][0])
    
// }
// solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
///--------------------------------------------------------------
// function sortNum(arr){
//   arr.sort((a,b) => a > b ? -1 : 1)
//   console.log(arr)
// }

// sortNum([ 23, 76, 400, 501 ])
////////////////////////////////////////////////////////////////

// function makeChange(change) {
//   let count = 0;
//   let money = change;
  
//   while(money >= 500){
//     money = money - 500
//     count++;
//   }
//   while(money >= 100){
//     money = money - 100
//     count++;
//   }
//   while(money >= 50){
//     money = money - 50
//     count++;
//   }
//   while(money >= 10){
//     money = money - 10
//     count++;
//   }
//   while(money >= 1){
//     money = money - 1
//     count++;
//   }
  
  
//   return count
// }

// makeChange(4730)

///////////////////////////////////////////

// class Counter {
//   #value
//   constructor(starValue) {
//     if(isNaN(startValue) || startValue < 0){
//       this.#value = 0;
//     } else {
//       this.#value = startValue;
//     }
//   }

// get value() {
//   return this.#value;
// }
// increment = () => {
//   this.#value++;
// }
// }

// const counter = new Counter(0);
// counter.increment();
// console.log(counter.value)
// --------------------------------------------------------
// function solution(s, n) {  
//   let a = ""; 
  
//   for(let i = 0; i < s.length; i++) {
//     let word = s[i].charCodeAt()
    
//     if(word === 32) {
//     	a += String.fromCharCode(word)
//     }
//     if(word <= 90 && word > 32){
//       if(word+n > 90){
//         let e = word + n - 26
//         a += String.fromCharCode(e)
//       } else {        
//         	let b = s[i].charCodeAt() + n;
//       		a += String.fromCharCode(b)
//       }
//     }
//     if(word >= 97 && word < 123){
//       if(word+n > 122){
//         let e = word + n - 26
//         a += String.fromCharCode(e)
//       } else {
//         let c = s[i].charCodeAt()+n;
//         a += String.fromCharCode(c)
//       }
//     }
//   }
//     return a
//  }

    
//     
    
//   }
//     let b = s[i].charCodeAt()
//     if(s[i].charCodeAt() === 122){
//     }
    
//     let c = a + String.fromCharCode(b+n)
//     console.log(c)
//   	// if()
  


// " ".charCodeAt() // 32
// String.fromCharCode(97) // 'a'

// solution("AB", 1)
// solution("z", 1)
// solution("a B z"	, 4)

//리팩토링

// function solution(s, n) {  
//   let a = ""; 
  
//   for(let i = 0; i < s.length; i++) {
//     let word = s[i].charCodeAt()
    
//     if(word === 32) {
//     	a += String.fromCharCode(word)
//     }
//     if(word <= 90 && word > 32){
//       if(word+n > 90){
//         let e = word + n - 26
//         a += String.fromCharCode(e)
//       } else {        
//         	let b = s[i].charCodeAt() + n;
//       		a += String.fromCharCode(b)
//       }
//     }
//     if(word >= 97 && word < 123){
//       if(word+n > 122){
//         let e = word + n - 26
//         a += String.fromCharCode(e)
//       } else {
//         let c = s[i].charCodeAt()+n;
//         a += String.fromCharCode(c)
//       }
//     }
//   }
//     return a
//  }




//--------------------------------------------------------

// function thisIsOnlySeven(str) {
//   let arr = str.split("")
//   function recursion(count) {
//     // 여기에 코드를 작성하세요
//     if(arr.length === 1) {
//       console.log(count);
//       str = arr.join('')
//       return count;
//     }
//     if(arr[arr.length - 1] !== '7'){
//       arr.pop()
//       count++
//     }
//     if(arr[0] !== '7') {
//       arr.shift()
//       count++
//     }
//     return recursion(count)
//   }

//   return recursion(0);
// }

// thisIsOnlySeven("1234567890")

//////////////////////////////////////////////////////////////
// let arr = [0,1,2,3,4,5,6,7,8,9]
// let arr2 = ["one", "two", "three", "four", "five", "six", "seven", "eigtht", "nine"]

// function solution(s){
//   for(let i = 0; i < arr.length; i++){
//     if(arr2[i].charCodeAt() > 64) {
//       console.log('hi');
//     }
//   }
  
//   console.log(s)
// }

// solution("one4seveneight")// "one4seveneight"	1478
// let a = "a".charCodeAt()
// String.fromCharCode(a)







// function destination(paths) {
//   let aaa = ""
//   for(let i = 0; i < paths.length; i++){
//     for(let j = i+1; j < paths.length; j++){
//       if(paths[i][1] === paths[j][0]){
//         if(paths[0][0] === paths[paths.length - 1][1]){
//           aaa = paths[0][1]
//         } else {
//         	aaa = paths[j][1]
//         }
//       }
//     }
//   }
//  return aaa
// }
// destination([ ['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo'], ])

// // destination([
// //         ['B', 'C'],
// //         ['D', 'B'],
// //         ['C', 'A'],
// //       ])

// destination([
//         ['Kwangju', 'Busan'],
//         ['Seoul', 'Ansan'],
//         ['Ansan', 'Kwangju'],
//       ]) // return Busan

// const pattern = 'a';
// const str = 'cup cup cup';
// const pattern = 'abaa'
// const str = 'dog cat cat dog'
// const pattern = 'abba';
// const str = 'dog cat cat dog';


// function stringPattern(pattern, str) {
//   // 여기에서 작업하세요.
//   let newStr = []
//   let newPat = []
//   str = str.split(" ");
//   pattern = pattern.split("");
  
  
//   let bool = false;
//   if(pattern.length !== str.length){
//     return false;
//   }
//   for(let i = 0; i < str.length; i++){
//    	newStr.push(str[i])
//     newPat.push(pattern[i])
//   }
// console.log(newStr)
// console.log(newPat)
// }

// function queue_01 (queueArr) {
// 	// 여기에 코드를 작성하세요.
//     let index = 0;
//     let length = 0;
//     for(let i = 0; i < queueArr.length; i++){
//         for(let j = 0; j < queueArr[i].length; j++){
//             length = length + queueArr[i].length;
//             if(queueArr[i].includes("Me")){
//                 length = length - 1
//                 index = i
//               	return [index, length]
//             }
//             break;
//         }
//     }
// }
// // queue_01([ [1, 2], [3, 4], [5, 6, 7], [8], ["Me"], [9, 10] ])
// queue_01([ [1, 2, 3, 4, 5, 6], ["Me"] ])
// const regex = / /gi;
// function queue_02 (queueArr, limit) {
// 	// 여기에 코드를 작성하세요.
//   let count = 0;
// 	let aaa = queueArr.join(",").replace(regex, '')
//   console.log()
//   console.log()
// }
// queue_02(
//       [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ], 
//       4
//     )
// queue_02(
//           [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ], 
//           3
//         )
// ////////////////////////////////////////////////////

// function myName (user, changeName) {
// 	// 여기에 코드를 작성하세요.
    
  
// }
// myName("철수", "훈이")

// /////////////////////////////////////////////////////////
// class Node {
//   constructor(){
//     this.element = 0;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(){
//     this.head = new Node("head");
//   }
  
//   append(newElement) {
//     	let newNode = new Node(newElement); //새로운 노드 생성
//     	let current = this.head; // 시작 노드
//     	while(current.next != null) { // 맨 끝 노드 찾기
//         	current = current.next;
//     	}
//     	current.next = newNode;
// 	}
  
//   insert(newElement, item) {
//     	let newNode = new Node(newElement); //새로운 노드 생성
//     	let current = this.find(item); // 삽입할 위치의 노드 찾기
//         newNode.next = current.next; // 찾은 노드가 가리키는 노드를 새로은 노드가 가리키기
//         current.next = newNode; // 찾은 노드는 이제부터 새로운 노드를 가리키도록 하기
// 	}
  
//   find(item){
//       let currNode = this.head;
//       while(currNode.element !== item) {
//         currNode = currNode.next;
//       }
//       return currNode;
//     }
  
// }

// function linkedList_01 (strArr, actions) {
// 	// 여기에 코드를 작성하세요.
//   let aaa = new LinkedList();
//   for(let i = 0; i < strArr.length; i++){
//     console.log( aaa.insert(strArr[i]) )
    
//   }
  
 
// }
// linkedList_01(
//           ["철수", "훈이", "영희", "맹구"],
//           [ "Remove 훈이", "Insert Junny" ]
//         )
 // {
 //        철수 : { next : "영희" },
 //        영희 : { next : "맹구" },
 //        맹구 : { next : "Junny" },
 //        Junny : { next : null }
 //      }

/////////////////////////////////////////////////////////////

// function signUp(users, hash) {
// 	// 여기에 코드를 작성하세요.
// 	console.log(users)
// }
// signUp(
//         ["a", "b", "c"],
//           function( str ) { 
//             if( str === "a" ) return 1;
//             if( str === "aa" ) return 1;
//             if( str === "b" ) return 3;
//             if( str === "c" ) return 5;
//           }
//       )
//////////////////////////////////////////////////////////
// const pattern = 'abba';
// const str = 'dog cat cat dog';
// function stringPattern(pattern, str) {
//   let aaa = new Map();
//   let bbb = str.split(" ");
  
//   if(pattern.length !== bbb.length) {
//     return false;
//   }
  
//   for(let i = 0; i < bbb.length; i++){
//     if(aaa.has(pattern[i])){
//       if( aaa.get(pattern[i]) !== bbb[i] ){
//         return false;
//       }
//       else {
//         return true;
//       }
//     }
//     else{
//       aaa.set(pattern[i], bbb[i])
//     }
//   }
// }
// stringPattern(pattern, str)

// //////////////////////////////////////////////////////////

// function destination(paths) {
//   // 여기에서 작업하세요.
//   let start = paths[0][0]
//   let aaa = new Map();
//   for(let i = 0; i < paths.length; i++){
// 	    aaa.set(paths[i][0], paths[i][1])
//   }
 
//   for(let i = 0; i < paths.length; i++){
//     if(!aaa.has( start) ){
//       return aaa.get(start)
      
//       console.log("11111111", start)
//   	}
//     else {
//       start = aaa.get(start);
//       console.log("=====", start)
//     }
//   }
//  return start
// }
// destination([
//         ['London', 'New York'],
//         ['New York', 'Lima'],
//         ['Lima', 'Sao Paulo'],
//       ])
// destination([
//         ['Kwangju', 'Busan'],
//         ['Seoul', 'Ansan'],
//         ['Ansan', 'Kwangju'],
//       ])

// ===========================================================

// function solution(n){
//   let aaa = n.toString(3)
//   let bbb = []
//   for(let i = aaa.length-1; i >= 0; i--){
//     bbb.push(aaa[i])
//   }
//   return Number.parseInt(bbb.join(""), 3)
// }
// solution(45)

// =====================================================

// function solution(s){
//   let aaa = s.split("");
//   let bbb = []
//   let zero = 0;
//   // console.log(aaa);
//   for(let i = 0; i < s.length; i++){
//     if(aaa[i] !== "0"){
//       bbb.push(aaa[i])
//     } else {
//       zero++;
//     }
//   }
//   let ccc = bbb.join("")
//   console.log(zero)
//   console.log(ccc)
//   // console.log(Number.parseInt(ccc, 2));
//   const a = /0/g
//   s.replace(a, "")
// }
// solution("110010101001")

// function solution(s){
//   let zero = 0;
//   let count = 0;
  
//   while(s !== "1"){
//     let aaa = s.replace(/0/g, ""); // 이진수
//     zero = zero + (s.length - aaa.length);
//     s = aaa
//     count++
//   }
//   return [count, zero]
// }
// solution("110010101001")


// function queue_02 (queueArr, limit) {
// 	// 여기에 코드를 작성하세요.
//   const regex = / /gi;
// 	console.log(queueArr.join(","))
// 	let aaa = queueArr.join(",")
//   // console.log("aaa", aaa)
//   return Math.ceil((aaa.split(",").indexOf("Hoony") + 1)/limit)

// }

// queue_02(
//       [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ], 
//       4
//     )
// ==============================================================

// function solution(new_id) {
//   const newId = new_id.split("")
//   let i = 0;
//   const ascii = newId[i].charCodeAt();
//   const arr = [];
  
//   for(; i < newId.length; i++){
//     if(ascii > 64 && ascii < 91){
//       arr.push(newId[i].toLowerCase())
//     } else {
//       arr.push(newId[i])
//     }
//   }
//   console.log(arr);
// }
// solution("...!@BaT#*..y.abcdefghijklm") // "bat.y.abcdefghi"
// solution("z-+.^.") // "z--"
// solution("=.=") // "aaa"
// solution("123_.def") // "123_.def"
// solution("abcdefghijklmn.p") // "abcdefghijklmn"
// =================================================================

// function O_2n (num) {
//     // 여기에 코드를 작성하세요

//     function aaa(bbb){
//         if(bbb === 0 || bbb === 1) {
//             return bbb;
//         }



//         return aaa(bbb-1)+aaa(bbb-2)
//     }
//     return aaa(num)

// }
// O_2n( 8 )



// function O_log_n(arr, target) {
//     // 여기에 코드를 작성하세요
//   let low = 0;
//   let high = arr.length-1;
//   let count = 0
//   // console.log(mid)
  
//   while(low<=high){
//     count++
//  		 let mid = Math.ceil((low+high)/2);
    
//   	if(arr[mid] === target) {
//       console.log(count)
//     	return mid;
//   	}
    
//     if( arr[mid] < target ){
//       low = mid + 1;
//     }
//     else if( arr[mid] > target ){
//       high = mid - 1;
//     }
    
//   }   
// }
// O_log_n( 
//         [
//             1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//             11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//             21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//             31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//             41, 42, 43, 44, 45, 46, 47, 48, 49, 50
//         ],
//         50
//     )

// ==========================================================

// function addDash(str) {
//   // 여기에서 작업하세요.
//   let aaa = str.split("")
//   let arr = []
//   console.log("여기는 초기", aaa)
  
//   for(let i = 0; i < aaa.length; i++){
//     if(aaa[i] === aaa[i+1]){
//       	arr.push(aaa[i])
//         arr.push("-");
//     } else {
//       arr.push(aaa[i])
//     }		
//   }
//   console.log("여기는 결과값", arr.join(""))
// }
// addDash('seoullaarizona')

// =============================================================

// function topsyTurvy(str, arr) {
  
//   let aaa = new Map();
//   for(let i = 0; i < arr.length; i++){
//     aaa.set(arr[i], str[i])
//     console.log(aaa)
//   }
  
//   let arr2 = ""
  
//   for(let i = 0; i < arr.length; i++){
//     arr2 = arr2 + aaa.get(i);
//   }
//   console.log(arr2)
  
  
//   // console.log(aaa.get(1))
// }
// topsyTurvy('campcode', [4, 5, 6, 7, 0, 1, 2, 3])

// ===============================================================

// function alphabetSwap(str1, str2) {
//   // 여기에서 작업하세요.
//   if(str1 === str2) return true;
  
//   let count = 0;
//   for(let i = 0; i < str1.length; i++){
//     if(str1[i] === str2[i]) {
//       count++
//     }
//   }
  
// 	console.log(count);
  
//   if( str1.length/2 === count ) {
//     return true;
//   } else {
//   	return false;
//   }
  
  
// }
// alphabetSwap('bank', 'kanb') // true
// alphabetSwap('alphabet', 'tlpaabeh') // false
// alphabetSwap('code', 'cdeo') // false
// alphabetSwap('camp', 'macp') // true
// alphabetSwap('coffee', 'coffee') // true

// =====================================================

function solution(people, limit) {
  people.sort((a,b) => b-a);
  
  let count = 0;
  for(let i = 0; i < people.length; i++){
    // console.log(people[i])
   	for(let j = i + 1; j < people.length; j++){
      console.log(people[i], people[j], people[i]+people[j])
      if(people[i]+people[j] <= limit){
        people.splice(i, 1);
        people.splice(j, 1);
        count++;
        people.pop()
      }
    } 
  }
  console.log(count)
  console.log(people)
}

solution([70, 50, 80, 50], 100)