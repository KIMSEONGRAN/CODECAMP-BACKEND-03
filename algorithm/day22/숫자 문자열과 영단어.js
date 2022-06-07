const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    //                    ↓ 정규식 변수넣기
    const regExp = new RegExp(numbers[i], "g");
    s = s.replace(regExp, i);
  }
  return Number(s);
}
solution("one4seveneight");
