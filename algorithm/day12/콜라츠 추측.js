function solution(num) {
  let count = 0;

  // 무조건 최대 500번까지 실행된다. (500버 안으로 1이 되는지를 확인한다.)
  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return count;
    }
    count++;

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  // 500번을 실행했는데도 1이 되지 않았다.
  return -1;
}

/** ref2
 *
 * function solution(num){
 *  let count = 0;
 *
 * const result = new Aray(500){
 *              .fill(1)
 *              .reduce( acc => {
 *
 *                  if( acc !== 1){
 *                  count++;
 *                  return acc % 2 === 0;
 *                          ? acc/2
 *                          : (acc * 3) + 1
 *                  } else {
 *                          return 1;
 *                  }
 *               },num);
 *      return result !== 1 ? -1 : count;
 *          }
 *      }
 */
