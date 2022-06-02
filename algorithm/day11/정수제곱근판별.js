function solution(n) {
  // 제곱의 기준이 되는 숫자
  // 2 * 2 === 4
  // 4의 제곱근 = 2

  for (let i = 0; i * i <= n; i++) {
    // console.log(i, i*i, n);
    // 11 * 11 = 121

    // 제곱근을 찾은 경우
    if (i * i === n) {
      answer = i + 1;
      return answer * answer;
      //   console.log(i);
    }
  }
  // 제곱근을 찾지 못한 경우
  return answer;
}

// ref2
/**
 * 
 * for (let i = 0; i * i <= n; i++) {
        // console.log(i, i*i, n);
        // 11 * 11 = 121
        
        // 제곱근을 찾은 경우
    if (i * i === n) {
        return answer = (i+1) * (i+ 1);
    }
  }
 * 
 * 
 */

// ref3
/**
 * 
 * for (let i = 0; i * i <= n; i++) {
        // console.log(i, i*i, n);
        // 11 * 11 = 121
        
        // 제곱근을 찾은 경우
    if (i * i === n) {
        return (i+1 ** 2)
    }
  }
 * 
 */

// ref4
/**
 * Number.isInteger => 정수인지 판별해주는 메소드
 * Math.sqrt => 숫자의 제곱근을 반환
 *
 * function solution(n){
 * let sqrt = Math.sqrt(n)
 *
 * if(Number.isInteger(sqrt)){
 *  // 정수인 경우 : 제곱근이 있는 경우
 *  return (sqrt+1) ** 2
 *  or return (sqrt+1) * (sqrt + 1)
 *  or return Math.pow(sqrt+1, 2)
 * } else {
 *  // 정수가 아닌 경우 : 제곱근이 없는 경우
 *  return -1
 * }
 *
 * }
 *
 *
 */
