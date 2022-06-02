let profile = {
    name: '철수',
    age: 13,
    school: '다람쥐초등학교',
    hobby: {
        hobby1: '수영',
        hobby2: '게임'
    }
}
let profile2 = JSON.stringify(profile);
console.log(profile2); // {"name":"철수","age":13,"school":"다람쥐초등학교","hobby":{"hobby1":"수영","hobby2":"게임"}}

let profile3 = JSON.parse(JSON.stringify(profile));
// {name: '철수', age: 13, school: '다람쥐초등학교', hobby: {…}}
// age: 13
// hobby:
    // hobby1: "수영"
    // hobby2: "게임"
// name: "철수"
// school: "다람쥐초등학교"