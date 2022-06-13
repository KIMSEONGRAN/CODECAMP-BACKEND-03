function solution(s) {
  let zero = 0;
  let count = 0;

  while (s !== "1") {
    let aaa = s.replace(/0/g, ""); // 이진수
    zero = zero + (s.length - aaa.length);
    s = aaa.length.toString(2);
    count++;
  }
  return [count, zero];
}
