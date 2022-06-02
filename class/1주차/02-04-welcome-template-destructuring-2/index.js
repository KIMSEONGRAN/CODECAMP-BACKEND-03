const apple = 3;
const banana = 2;


console.log('철수는 사과를' + apple + '개, ' + '바나나를' + banana + '개 가지고 있습니다.');
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`);

function aaa({ age, name }){
    // const apple = 3
    // const { age, name } = { name: "영희", age: 7, scchool: "토끼초등학교" }


    console.log(apple)

}

const profile = { 
    name: "영희", 
    age: 7, 
    scchool: "토끼초등학교"
}
aaa(profile)





// 파라미터로 구조분해할당 바로 해버리기.
function getWelcomTemplate({ name, age, school, createdAt }){
    // const { name, age, school, createAt } = { name: '영희', age: 12, school: '토끼초등학교', createdAt: '2020-01-02' }

    const result = `
            <html>
                <body>
                        <h1>${name}님 가입을 환영합니다!!!</h1>
                        <hr />
                        <div>이름: ${name}</div>
                        <div>나이: ${age}살</div>
                        <div>학교: ${school}</div>
                        <div>가입일: ${createdAt}</div>
                </body> 
            </html>
    `
    console.log(result);
}

// const myuser = {
//     name: "영희",
//     age: 12,
//     school: '토끼초등학교',
//     createdAt: '2020-01-02'
// }

/*
const name = "영희"
const age = 12
const school = "토끼초등학교"
const createdAt = "2020-01-02"

const myuser = {
    name,
    age,
    school,
    createdAt
}
*/
const name = "영희"
const age = 12
const school = "토끼초등학교"
const createdAt = "2020-01-02"

// 다음의 방식을 shorthand property 라고 한다. key value 이름이 같으면 축약.
// const myuser = { name, age, school, createdAt }
getWelcomeTemplate({ name: '영희', age: 12, school: '토끼초등학교', createdAt: '2020-01-02' });
// = getWelcomeTemplate({ name: name, age: age, school: school , createdAt: createdAt });