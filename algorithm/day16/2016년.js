/*
    2016년 1월 1일(금요일)

    +0 : 1월 1일 (+0)
    +1 : 1월 2일 (+1) // 토요일
    +2 : 1월 3일 (+2) // 일요일
    +3 : 1월 4일 (+3) // 월요일
    +4 : 1월 5일 (+4) // 화요일
    +5 : 1월 6일 (+5) // 수요일
    +6 : 1월 7일 (+6) // 목요일

    +7 : 1월 8일 (+0) // 금요일 : 금요일을 기준으로 7일이 되었으면 다시 요일이 되돌아온 것이기에 0이 지난것.
    +8 : 1월 9일 (+1) // 토요일
*/

const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]; // 금요일이 기준날이기에 금요일부터 시작

function solution(a, b) {
  // a월 b일까지 총 며칠이 흘렀는지에 대한 정보를 저장
  let days = 0;

  // 비교식에서 a월을 제외한 이유는 a월은 아직 다 지난게 아니기 때문이다.
  for (let i = 1; i < a; i++) {
    // console.log(i, month[i]);
    days += month[i];
  }
  days += b - 1;
  return week[days % 7];
  // console.log(days);
  // console.log(a, b);
  // return answer;
}

/*
function solution(a,b){
    const days = new Array(a)
                    .fill(1)
                    .reduce( (acc, cur) => {
                        const mn = cur + i;
                        return acc + (mn !== a
                            // 이전 월일 경우 (통째로 일수를 더해준다)
                            ? month[mn]
                            // a월 일 경우 (b일 까지만 더해준다.)
                            : b - 1
                            )
                    }, 0)
    console.log(days)
    return week[days % 7]
}
*/

/**
 *  날짜문법 Date문법(날짜 관리하고 싶을때 사용)
 *
 *  Date() // type : 'string'
 *  new Date() // type : 'obj'
 *
 *  new Date(2016, 5-1, 24) // 값을 넣어서 해당 날짜의 값을 가져올 수 있다. 달은 0부터 시작한다.
 *
 *
 * const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
 * function solution(a,b){
 *
 *  const days = new Date( 2016, a - 1 , b).getDay()
 *      return week[days]
 * }
 */
