// 이 방법은 비교해야할 문자 수가 많아질 수록 효율이 좋지 않다.
function solution(s){
    let p = 0; // 문자열 p의 갯수를 저장
    let y = 0; // 문자열 y의 갯수를 저장
    
    s = s.toLowerCase(); // 문자열 전체가 소문자로 변경된다.
    for(let i = 0; i < s.length; i++){
        if(s[i] === "p"){
            p++
        } else if (s[i]==="y") {
            y++;
        }
    }

    return p === y;
}

// ref2
/* 정적인 카운트 방법
function solution(s){
    let p = 0; // 문자열 p의 갯수를 저장
    let y = 0; // 문자열 y의 갯수를 저장
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "p" || s[i] === "P"){
            p++
        } else if (s[i]==="y" || s[i]==="Y") {
            y++;
        }
    }

    return p === y;
}


*/


/*
동적인 카운트 방법 Good!
function solution(s){
    const answer = {};

    s = s.toLowerCase() // 1. 문자열 전체를 소문자로 치환
        .split("") // 2. 문자열을 배열로 만든다.
        .forEach( str => {
            answer[ str ] === undefined
                ? answer[ str ] = 1
                : answer[ str ]++;
            })
            return answer.p === answer.y
}



*/