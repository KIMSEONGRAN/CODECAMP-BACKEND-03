// 타입추론 : 담기는 값을 보고 타입을 추론하는 것. 변수에 마우스 올려보면 추론된 타입 알수있음
let aaa = "안녕하세요";
aaa = 3;

// 타입명시 : 타입을 지정하는것. 타입을 명시하면 다른 타입은 담길 수 없다.
let bbb: string = "반갑습니다";
bbb = 10;

// 타입 명시가 필요한 상황
// |  => or 이라는 뜻
let ccc: string | number = "반갑습니다";
ccc = 10;

// 숫자타입
let ddd: number = 10;
ddd = "철수";

// 불린타입(주의요망)
let eee: boolean = true;
eee = false;
eee = "fasle"; // 얘는 true로 작동한다. !!주의요망!! 이거 JS 조건문에서 "false"는 true다. 그리고 빈문자열 또한 JS에서는 false를 나타낸다.

// 배열타입
let fff: number[] = [1, 2, 3, 4, 5, "hi"];
let ggg: string[] = ["철수", "영희", "훈이", 3];
let hhh: (string | number)[] = [1, 2, 3, 4, 5, "hi"];

// 객체타입
interface IProfile {
  name: String;
  age: Number | String;
  school: String;
  hobby?: String; // ?를 하면 있어도 되고 없어도 되는 친구라는 명시가 된다. ?이거없으면 객체 변수에 에러남. 왜 하비없냐고
}
let profile: IProfile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
};

profile.age = "8살";
profile.hobby = "수영";

// 함수타입
// 함수 파라미터의 타입 추론은 기본적으로 any다. 왜냐면 함수 호출은 여러군데서 이루어질 수 있기때문에 추론이 불가능하다.
// 대신에 파라미터에 직접 타입 명시를 해줘야한다
// 리턴 타입에 대한 명시도 가능하다. 그건 파라미터 뒤에다 해주면 된다.
const add = (money1: number, money2: number, unit: string): string => {
  return money1 + money2 + unit;
};
const result = add(1000, 2000, "원");
