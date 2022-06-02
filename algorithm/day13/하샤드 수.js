function solution(x) {
  // 자릿수의 합을 저장하는 변수
  let sum = 0;

  x = String(x); // x.toString();
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return x % sum === 0;
}

/** ref2
 * 
 * function solution(x) {
    const sum = x.toString()
                .split("")
                .reduce( (acc, cur) => {
                    return Number(acc) + Number(cur)
                })
    return x % sum === 0
 * }
 */

/* ref3

function solution(x) {
    const sum = x.toString()
                .split("")
                .reduce( (acc, cur) => {
                    // 초기값 0을 넣어주면 누적값은 넘버타입으로 안바꿔도 된다. 누적값은 숫자타입을 먼저 가져오기 때문이다.
                    return acc + Number(cur)
                }, 0)
    return x % sum === 0
}


*/
