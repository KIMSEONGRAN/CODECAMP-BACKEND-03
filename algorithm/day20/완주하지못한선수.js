function solution() {
  const answer = {};
  // 1. 참가자 선수들의 이름과 수를 정리

  for (let i = 0; i < participant.length; i++) {
    answer[participant[i]] === undefined
      ? (answer[participant[i]] = 1)
      : answer[participant[i]]++;
  }

  // 2. 참가자 명단에서 완주한 선수 이름을 제거
  for (let i = 0; i < completion.length; i++) {
    answer[completion[i]]--;
  }

  // 3. 완주하지 못한 선수 찾기
  for (let key in answer) {
    if (answer[key] !== 0) {
      return key;
    }
  }
}

/*

function solution(participant, completion) {
    participant.sort((a,b) => a > b ? 1 : -1);
    completion.sort((a,b) => a > b ? 1 : -1);

    let answer = "";

    for(let i = 0; i < completion.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

*/

/*
    function solution(participant, completion) {

        participant.sort((a,b) => a > b ? 1 : -1);
        completion.sort((a,b) => a > b ? 1 : -1);

        return participant.filter((name, i) => {
            return name !== completion[i]
        })
    }

*/
