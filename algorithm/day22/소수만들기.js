function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let l = i + 1; l < nums.length; l++) {
      for (let j = l + 1; j < nums.length; j++) {
        const sum = nums[i] + nums[l] + nums[j];

        let count = 0;
        for (let o = 1; o <= sum; o++) {
          if (sum % o === 0) {
            // 약수를 구해온다.
            count++;

            if (count > 2) {
              break;
            }
          }
        }
        if (count === 2) {
          answer++;
        }
      }
    }
  }
  return answer;
}
