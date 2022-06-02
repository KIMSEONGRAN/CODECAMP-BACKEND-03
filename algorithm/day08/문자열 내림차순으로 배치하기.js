function solution(s) {
    // sort를 써서 오름차순으로 정렬할 수 있는데, 고차함수를 써서 더욱 정확하게 비교한다. -1하면 뒤로 보내고, 1을 하면 앞으로 보내게된다.
    const answer = s.split('')
                    .sort((a,b) => {
                        return a > b? -1 : 1;
                    }).join("")
    return answer;
}