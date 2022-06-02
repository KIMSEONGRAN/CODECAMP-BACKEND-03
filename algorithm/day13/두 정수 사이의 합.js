function solution(a, b) {
  let answer = 0;

  if (a === b) {
    return a; // b
  } else {
    // 최소값 구하기
    // 반복문이 실행될 때 설정되는 초기값(a와b중 작은 수가 들어온다.)
    const min = a > b ? b : a;

    // 최댓값 구하기
    // 반복문이 종료되는 조건을 설정(a와b중 큰 수가 들어온다.)
    const max = a > b ? a : b;

    for (let i = min; i <= max; i++) {
      answer += i;
    }
  }
  return answer;
}

/* ref2

function solution(a,b){
    if(a === b) {
        return a;
    }
    const min = Math.min(a,b);
    const max = Math.max(a,b);

    return new Array( max - min )
            .fill(1)
            .reduce( (acc, cur, i) => {
                const num = (min + cur) + i;
                return acc + num;
            }, min)

}



*/
