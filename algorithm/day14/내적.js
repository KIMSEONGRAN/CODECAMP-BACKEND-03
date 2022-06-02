function solution(a, b) {
  var answer = 0;

  for (let i = 0; i < b.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

/*
    // ref2

    function solution (a,b) {
        return a.reduce((acc, cur) => {
            return acc + (cur * b[i])
        }, 0)
    }

*/
