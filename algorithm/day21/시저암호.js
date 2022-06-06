/*
    ===== 내가 푼 방식 =====

function solution(s, n) {  
  let a = ""; 
  
  for(let i = 0; i < s.length; i++) {
    let word = s[i].charCodeAt()
    
    if(word === 32) {
    	a += String.fromCharCode(word)
    }
    if(word <= 90 && word > 32){
      if(word+n > 90){
        let e = word + n - 26
        a += String.fromCharCode(e)
      } else {        
        	let b = s[i].charCodeAt() + n;
      		a += String.fromCharCode(b)
      }
    }
    if(word >= 97 && word < 123){
      if(word+n > 122){
        let e = word + n - 26
        a += String.fromCharCode(e)
      } else {
        let c = s[i].charCodeAt()+n;
        a += String.fromCharCode(c)
      }
    }
  }
    return a
 }

    ============================================
*/

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // 공백일경우
      answer += s[i];
    } else {
      // 1. 대문자인지 소문자인지를 판별한다.

      // 2. 대문자라면 (index가 25 초과라면) 대문자만 잘라서 저장하고
      //    소문자라면 (index가 25 이하라면) 소문자만 잘라서 저장한다.
      const index = alphabet.indexOf(s[i]);
      const word =
        index > 25 ? alphabet.substring(26) : alphabet.substring(0, 26);
      // 3.잘라온 문자열 안에서 다시 인덱스 값을 뽑아서 n만큼 밀어준다.
      index = word.indexOf(s[i] + n);

      // 4. 밀어줬을 때에 z를 초과할 경우 (26인덱스를 초과할 경우에는)
      //    알파벳의 수만큼 빼준다.(a부터 시작한다.)
      if (index >= 26) {
        index -= 26;
      }
      answer += word[index];
    }
  }
  return answer;
}

/*      ref2

const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


function solution(s, n){

    let answer = "";

    for (let i = 0; i < s.length; i++){
        if(s[i] === " "){
            answer += " ";
            continue;
        }
        const word = lowerCase.includes(s[i]) ? lowerCase : upperCase;
        let index = word.indexOf(s[i]) + n;

        if(index >= 26) {
            index -= 26
        }
        answer += word[index]
    }
    return answer;

}

*/

/*      ref3

const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


function solution(s, n){

    return s.split("").reduce((acc, cur) => {
        const word = lowerCase.includes(cur) ? lowerCase : upperCase;
        const index = word.indexOf(cur) + n;
    
        if(index >= 26){
            index -= 26;
        }
        return acc + (
            cur === " " ? " " : word[index]
        )

    }, "")
}

*/

/*
        ref4


    function solution(s, n) {
        let answer = " ";

        for (let i = 0; i < s.length; i++) {
            if(s[i] === " "){
                answer += " ";
                continue;
            }
            const index = s[i].charCodeAt() + n;

            if(code > 122 || code > 90 & (code - n) < 97){
                // 소문자 z(122)를 초과하거나
                // 대문자 Z(90)를 초과하면서
                // 기존의 유니코드 번호가 소문자일 경우
                code -= 26;
            }
            answer += String.fromCharCode(code);
        }
        return answer;
    }



*/
