function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    answer += signs[i] ? absolutes[i] : -absolutes[i];
    console.log(answer, signs[i], absolutes[i]);
  }
  return answer;
}

/*
    function solution(absolutes, signs) {
return absolutes.reduce ( (acc, cur, i) => {
    return acc + (sign[i]
        ? cur // signs[i]가 true라면 양수 더해준다
        : -cur // signs[i]가 false라면 음수 빼준다
        )
}, 0)

    }


*/
