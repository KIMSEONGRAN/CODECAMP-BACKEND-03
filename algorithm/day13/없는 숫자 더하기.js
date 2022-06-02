function solution(numbers) {
  var answer = 0;

  for (let i = 1; i <= 9; i++) {
    if (numbers.includes(i) === false) {
      answer += i;
    }
  }

  return answer;
}

/*
function solution(numbers) {
    return new Array(9).fill(1).reduce((acc, cur) => {
        const num = cur + i;
        return acc + (
            numbers.includes(num)
            // 배열에 존재한다면 0을 더해준다
            ? 0
            // 배열에 존재하지 않는다면 숫자를 더해준다
            : num
        )
    }, 0)
}



*/
