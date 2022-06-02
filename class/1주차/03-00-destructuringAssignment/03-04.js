let profile = {
    name: '철수',
    age: 13,
    school: '다람쥐초등학교',
    hobby: {
        hobby1: '수영',
        hobby2: '게임'
    }
}
let profile3 = {
    ...profile
}
let profile2 = {
    name: profile.name,
    age: profile.age,
    school: profile.school,
    hobby: profile.hobby
}
profile2.hobby.hobby1 = '독서하기';
console.log(profile2)
// {name: '철수', age: 13, school: '다람쥐초등학교', hobby: {…}}
// age: 13
// hobby: {hobby1: "독서하기", hobby2: "게임"}
// name: "철수"
// school: "다람쥐초등학교"

console.log(profile)
// {name: '철수', age: 13, school: '다람쥐초등학교', hobby: {…}}
// age: 13
// hobby: {hobby1: '독서하기', hobby2: '게임'}
// name: "철수"
// school: "다람쥐초등학교"