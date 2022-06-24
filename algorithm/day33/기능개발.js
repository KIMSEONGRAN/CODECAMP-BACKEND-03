function solution(progresses, speeds) {
  var answer = [];

  let day = 0;
  for (let i = 0; i < progresses.length; i++) {
    const progress = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (progress > day) {
      day = progress;
      answer[answer.length] = 1;
    } else if (progress <= day) {
      // 개발이 완료되었지만, 앞에 기다려야 하는 기능이 존재할 경우
      // (=== 앞의 기능이 완료될때까지 기다린다)
      answer[answer.length - 1]++;
    }
  }
  return answer;
}

// function solution(progresses, speeds) {
//     let day = 0; // 내가 배포하는 시점을 계산
//     return progresses.reduce( (acc, cur, i) => {
//         const progress = Math.ceil((100 - cur) / speeds[i])

//         if(progress > day) {
//             // 현재 기능을 바로 배포할 수 있는 시점
//             day = progress;
//             acc[acc.length] = 1;
//         } else if ( progress <= day){
//             acc[acc.length - 1]++;
//         }
//         return acc;
//     }, [])
// }
