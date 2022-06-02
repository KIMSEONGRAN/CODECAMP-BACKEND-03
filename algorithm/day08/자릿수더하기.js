function solution(n){
    // 1. n변수를 문자열 타입으로 변환(각각의 자릿수를 가져오기 위해서)
    n = String(n);
    var answer = 0;

    // 2. 문자열 타입의 n의 각각의 요소 값을 가져온다.
    for (let i = 0; i < n.length; i++){
        // 3. 문자열 타입의 n[i] 값을 숫자타입으로 변환한다. (연산을 위해서)
        // console.log( typeof n[i]);
        answer += n[i];
    }
    console.log(answer);

    return answer;
}

/* ref2

function solution(n){
    const answer = n.toString()
                    .split("")
                    .reduce((acc, cur) => {
                        return acc + Number(cur)
                    }, 0)
    return answer
}

*/