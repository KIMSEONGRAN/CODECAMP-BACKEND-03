function solution(arr) {
  var answer = [];

  // min을 arr의 0번째로 미리 담아두면 반복문에서 불필요한 arr[0]과 arr[0]의 비교를 할 필요가 없어지는거다.
  // 1. 제일 작은 수 찾기
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // 2. 제일 작은 수를 제외한 데이터를 배열에 추가
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }

  // 빈 배열인지 체크
  // 빈 배열이라면, -1이 담긴 배열을 리턴
  // 아니라면 2번 과정에서 받아온 배열을 리턴
  return answer.length === 0 ? [-1] : answer;
}

// ref2
/**
 *
 * function solution(arr){
 *  // 1. 제일 작은 수 찾기
 *  const min = Math.min(...arr);
 *
 *  // 2. 제일 작은 수를 제외한 데이터를 배열에 추가
 *  const answer = arr.filter((num) => {
 *    return num !== min
 *  })
 *                              // 빈배열일 경우 // 빈배열이 아닐경우
 *  return answer.length === 0 ? [-1] : answer
 * }
 *
 *
 */
