const child = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
    money: 2000,
    hobby: '수영'
}
const {money, hobby, ...rest } = child
console.log(rest); // {name: '철수', age: 8, school: '다람쥐초등학교'}

/*
    rest문법을 사용하면 객체 혹은 배열에서 필요없는 건 빼고 가져올 수 있다.
    원본은 회손되지 않는다.
    rest 파라미터는 항상 제일 마지막에 와야한다.

    위의 코드로 보면
    child를 콘솔에 찍으면 name, age, school, money, hobby 가 출력되지만
    rest를 찍으면 name, age, school만 출력된다. 즉 내가 적은 money와 hobby가 빠진것을 확인할 수 있다.
    구조분해할당과 자주 쓰이게 된다.

*/


const child2 = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
    money: 2000,
    hobby: '수영'
}