let profile = {
    name: '철수',
    age: 13,
    school: '다람쥐초등학교'
}
let profile2 = profile;
console.log(profile2); // {name: '철수', age: 13, school: '다람쥐초등학교'}
console.log(profile); // {name: '철수', age: 13, school: '다람쥐초등학교'}

profile2.name = '영희';
console.log(profile2); // {name: '영희', age: 13, school: '다람쥐초등학교'}
console.log(profile); // name: '영희', age: 13, school: '다람쥐초등학교'}

let profile4 = {
    // 다음의 표기법을 스프레드 연산자라고 한다.
    // 얕은 복사를 수행한다.
    // key와 value값이 같아서 스프레드 연산자로 축약표시했다.
    ...profile
}
console.log(profile4); // {name: '영희', age: 13, school: '다람쥐초등학교'}
console.log(profile); // {name: '영희', age: 13, school: '다람쥐초등학교'}

profile4.name = '훈이'; // '훈이'
console.log(profile4); // {name: '훈이', age: 13, school: '다람쥐초등학교'}
console.log(profile); // {name: '영희', age: 13, school: '다람쥐초등학교'}