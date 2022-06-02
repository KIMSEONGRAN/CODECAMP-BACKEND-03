function solution(n) {
    // 1. n 매개변수를 문자열로 만든다.
    n = n.toString();
    
    const answer = [];
    // 2. 문자열의 마지막 데이터부터 순서대로 배열에 넣어준다.
    for(let i = n.length - 1; i >= 0; i--){
        answer.push(Number(n[i]))
    }
    return answer;
}

/*
function solution(n){
    return n.toString()
            .split("")
            .reverse()
            .map(el => Number(el))
}

*/