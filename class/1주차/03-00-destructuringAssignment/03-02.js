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

let profile3 = {
    name: profile.name,
    age: profile.age,
    school: profile.school
}
console.log(profile3); // {name: '영희', age: 13, school: '다람쥐초등학교'}
console.log(profile); // {name: '영희', age: 13, school: '다람쥐초등학교'}
profile3.name = '훈이'; // '훈이'
console.log(profile3); // {name: '훈이', age: 13, school: '다람쥐초등학교'}
console.log(profile); // {name: '영희', age: 13, school: '다람쥐초등학교'}