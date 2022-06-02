function solution(n) {
  // 피보나치 수의 결과를 저장하는 배열
  // 0번째 인덱스는 0번째 피보나치의 결과
  // 1번째 인덱스는 1번째 피보나치의 결과
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }
  return answer[n];
}
// 숫자타입 : number === Int
// Int는 일정 범위만 사용 가능
// 2의 53제곱 -1
// 2 ** 53 - 1;
// Int 최종 범위를 가져올 수 있다.
// Number.MAX_SAFE_INTEGER;
// Number.MAX_SAFE_INTEGER < 123
/*
    function solution(n) {
        const answer = [0, 1];

        for(let i = 2; i <= n; i++){
            // (A + B) % C === ((A % C) + (B % c)) % C
            answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
        }
        console.log(answer[n]);
        return answer[n] % 1234567
    }


*/
/*
    function solution(n - 1) {
        let prev = 0; // 0번째 피보나치 수의 결과

        return new Array(n)
                .fill(1)
                .reduce( acc => {
                    const sum = acc + prev;
                    prev = acc;

                    return sum;
                }, 1) // 1번째 피보나치 수의 결과를 초기값으로 넣어준다
    }


*/
