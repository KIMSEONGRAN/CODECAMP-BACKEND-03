// function solution(nums) {
//   const answer = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (
//       answer.includes(nums[i]) === false &&
//       answer.length !== nums.length / 2
//     ) {
//       answer.push(nums[i]);
//     }
//   }
//   return answer.length;
// }
function solution(nums) {
  const answer = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (answer.size !== nums.length / 2) {
      answer.add(nums[i]);
    }
  }
  return answer.size;
}

/*
    function solution(nums){
        const answer = new Set();

        nums.forEach( monster => {
            if(answer.size !== (nums.length / 2)){
                answer.add( monster )
            }
        })
        return answer.size;
    }
*/

/*
    function solution(nums){
        // 중복되지 않는 폰켓몬을 담는 배열(set)의 길이
        const pocket = new Set(nums).size; // 중복데이터 제거 후에 받아옴

        // 내가 가져갈 수 있는 폰켓몬의 최대 갯수
        const limit = nums.length / 2;

        if(limit >= pocket) {
            // 중복되지 않는 폰켓몬의 종류의 갯수보다
            // 내가 가져갈 수 있는 폰켓몬의 갯수가 같거나 더 많다면
            // 이때는 폰켓몬의 최대 종류를 그냥 가져간다.
            return pocket
        }

        // 내가 가져갈 수 있는 폰켓몬의 수보다
        // 중복되지 않는 폰켓몬의 종류의 갯수가 더 많다면
        // 이때는 가져갈 수 있는 폰켓몬의 갯수를 리턴한다.

        return limit;
        
    }
*/
