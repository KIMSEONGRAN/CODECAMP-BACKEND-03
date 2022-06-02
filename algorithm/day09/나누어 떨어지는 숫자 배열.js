function solution(arr, divisor) {
    var answer = [];
    
    
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0) {
            console.log(i, arr[i], divisor, arr[i]% divisor)
            
            answer.push(arr[i]);
        }
    }
    
    // 배열이 빈배열인지를 확인한다. (=== 나누어 떨어지는 숫자가 하나도 없는 경우)
    // 이때는 배열에 -1을 담아서 리턴한다.
    // 빈배열이 아니라면 배열을 오름차순해서 리턴한다.
    return answer.length === 0
        ? [-1]
        : answer.sort((a,b) => a - b)
}

/*
function solution(arr, divisor) {
    var answer = arr.filter( num => {
        return num % divisor = 0;
    });

   return answer.length === 0
        ? [-1]
        : answer.sort((a,b) => a - b);
}
*/