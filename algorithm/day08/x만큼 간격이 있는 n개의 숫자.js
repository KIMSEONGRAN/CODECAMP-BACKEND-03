function solution(x, n) {
    var answer = [];
    
    for (let i = 1; i <= n; i++){
        answer.push(i * x)
    }
    return answer;
}

/* ref2
    // 연산값을 가져오고고 싶으면 reduce
    // 고정된 값에 로직을 적용하고 싶을때 map


    function solution(x, n){
        const answer = new Array(n)
                        .fill(1)
                        .map( (num, i) => {
                            return (num + i) * x;
                        })
    return answer;
    }
*/