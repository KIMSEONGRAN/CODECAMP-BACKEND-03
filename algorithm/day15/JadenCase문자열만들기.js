function solution(s) {
  var answer = "";

  s = s.toLowerCase();
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (s[i] === " ") {
      idx = 0;
    } else {
      if (idx === 0) {
        letter = s[i].toUpperCase();
      }
      idx++;
    }
    answer += letter;
  }

  return answer;
}

/*
    function solution(s) {
        return s.toLowerCase()
                .split( " " )
                .map( word => {
                    return word === " "
                    ? word
                    : word[0].toUpper
                })

    }
*/
