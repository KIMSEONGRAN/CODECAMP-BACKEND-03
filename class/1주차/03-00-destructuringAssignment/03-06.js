const child1 = {
    name: '철수',
    age: 13,
    school: '다람쥐초등학교'
}
const child2 = { ... child1 }
console.log(child2); // {name: '철수', age: 13, school: '다람쥐초등학교'}


child1 = {
    name: {
        first: '김',
        last: '철수'
    },
    age: 13,
    school: '다람쥐초등학교'
}
child2 = JSON.parse(JSON.stringify(child1));
console.log(child2); // {name: {…}, age: 13, school: '다람쥐초등학교'}
// name: {first: '김', last: '철수'}
// age: 13
// school: "다람쥐초등학교"



child2.name.first = '최'
child2.name.last = '영희'
console.log(child2); // {name: {…}, age: 13, school: '다람쥐초등학교'}
// age: 13
// name: {first: '최', last: '영희'}
// school: "다람쥐초등학교"

console.log(child1); // {name: {…}, age: 13, school: '다람쥐초등학교'}
// age: 13
// name: {first: '김', last: '철수'}
// school: "다람쥐초등학교"