function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (answer.includes(sum) === false) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

/**
 * ref - JS에서의 중복 문법 제거
 * 
 * function solution(numbers) {
  var answer = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      answer.add(numbers[i] + numbers[j])
    }
  }
  return Array.from(answer).sort((a,b) => a-b);
}
 *
 */

/** ref3
 *
 * numbers.forEach( (num1, i) => {
 *      numbers.slice(i + 1).forEach( num2 => {
 *          answer.add(num1 + num2)
 *      })
 * })
 *
 * return Array.from(answer).sort((a,b) => a-b);
 *
 *
 *
 */
