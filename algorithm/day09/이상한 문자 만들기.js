function solution(s) {
    var answer = '';
    
    let idx = 0; // 단어별로 (공백별로) 인덱스 값을 판단하는 역할
    for (let i = 0; i < s.length; i++){
        if( s[i] === " "){
            // 공백이라면, 그냥 넣어준다. (예외처리)
            answer += s[i];
            idx = 0; // 인덱스 값을 0으로 초기화한다
        } else {
            answer += idx % 2 === 0
            // 짝수 인덱스라면 대문자로 변환
            ? s[i].toUpperCase()
            // 홀수 인덱스라면 소문자로 변환
            : s[i].toLowerCase() // .toLowerCase를 쓴 이유는 전체가 대문자일 경우를 대비했다.
            idx++;
        }
    }
    
    
    return answer;
}

/*
    function solution(s) {
        const answer = s.split("")
                        .map( word => {
                            return word.split("")
                                        .map( (letter, i) => {
                                            return i % 2 === 0
                                            ? letter.toUpperCase()
                                            : letter.toLowerCase()
                                        }).join("")
                        }).join("")
        return answer;
    }
*/