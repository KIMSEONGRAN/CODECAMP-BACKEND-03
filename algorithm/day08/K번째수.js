function solution(array, commands) {
    const answer = [];

    for (let idx = 0; idx < commands.length; idx++){
        const i = commands[idx][0];
        const j = commands[idx][1];
        const k = commnads[idx][2];

        const result = array.slice(i-1, j)
                            .sort((a,b) => {
                                return a - b;
                            })
        answer.push(result[k-1])
    }
    return answer;
}

/*
    function solution(array, commands) {
        const answer = commands.map(el => {
            const result = array.slice(el[0] -1, e[i])
                                .sort((a,b) => {
                                    return a - b;
                                });
            return result[el[2] - 1]
        })
        return answer;
    }
 */