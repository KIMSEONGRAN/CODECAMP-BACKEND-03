
const child = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
    money: 2000,
    hobby: '수영'
}
const { school, ...rest } = child
console.log(child); // {name: '철수', age: 8, school: '다람쥐초등학교', money: 2000, hobby: '수영'}
console.log(rest); // {name: '철수', age: 8, money: 2000, hobby: '수영'}