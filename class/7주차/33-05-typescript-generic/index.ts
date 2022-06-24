// 1. 문자 타입일때
//                                  ↓ return  값에 대한 타입 명시
function getString(arg: string): string {
  return arg;
}
const result1 = getString("철수");

// 2. 숫자 타입일때
//                                  ↓ return  값에 대한 타입 명시
function getNumber(arg: number): number {
  return arg;
}
const result2 = getNumber(8);

// 3. any 타입일때 - 타입스크립트의 장점을 살릴 수 없는 좋지 못한 방법
function getAny(arg: any): any {
  return arg;
}
const result31 = getAny("철수");
const result32 = getAny(8);
const result33 = getAny(true);

// 4. generic 타입 : any 타입(뭐든지 넣을 수 있긴함)이긴 한데 들어온 값을 타입으로 기억하고 있다가 계속 사용. 나만의 타입인 셈. 미래 예측
//
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}
const result41 = getGeneric("철수");
const result42 = getGeneric(8);
const result43 = getGeneric(true);

// 5. any 타입 응용
function getAnyReverse(arg: any, arg2: any, arg3: any): [any, any, any] {
  return [arg3, arg2, arg];
}
const result5 = getAnyReverse("철수", "다람쥐초등학교", 8);

// 6. generic 타입 응용
// 바로 아랫줄 prettier 처리하지 않는 방법 ↓ // prettier-ignore
// prettier-ignore
function getGenericReverse<MyType1, MyType2, MyType3>(arg: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg];
}
const result6 = getGenericReverse("철수", "다람쥐초등학교", 8);

// 7. generic 타입 응용 - 축약버전1
// prettier-ignore
function getGenericReverseT<T1, T2, T3>(arg: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
    return [arg3, arg2, arg];
  }
const result7 = getGenericReverseT("철수", "다람쥐초등학교", 8);

// 8. generic 타입 응용 - 축약버전2
// prettier-ignore
function getGenericReverseTUV<T, U, V>(arg: T, arg2: U, arg3: V): [V, U, T] {
    return [arg3, arg2, arg];
  }
const result8 = getGenericReverseTUV("철수", "다람쥐초등학교", 8);
// const result8 = getGenericReverseTUV<string, string, number>(
//   "철수",
//   "다람쥐초등학교",
//   8
// );
