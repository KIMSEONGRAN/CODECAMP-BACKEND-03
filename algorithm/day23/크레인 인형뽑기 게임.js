function solution(board, moves) {
  var answer = 0;
  const bucket = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const doll = board[j][moves[i] - 1];

      // 인형이 있는 칸이 빈칸(0)이 아니라면
      if (doll !== 0) {
        // 방금 뽑은 인형의 위치를 빈칸으로 만들어준다.
        board[j][moves[i] - 1] = 0;

        // 바구니의 마지막 인형과 내가 지금 넣으려고 하는 인형이 똑같은지를 판단
        if (bucket[bucket.length - 1] === doll) {
          answer += 2;
          bucket.pop();
          break;
        }

        // 인형일때만 바구니에 인형을 넣어준다. (0이 아닐때만)
        bucket.push(doll);
        break;
      }
    }
  }

  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
); // 4

/*
  function solution(board, moves){

    let answer = 0;
    const bucket = [];

    moves.forEach( move => {
      // 반복문을 실행하지 않게 하는 변수 (= 스위치 변수)
      // stop이 true 일때만 실행된다.
      // forEach에선 return도 break도 안되기때문에 반복문을 멈추기 위한 일종의 장치역할.
      let stop = false;

      board.forEach( location => {
        const doll = location[move - 1];

        // 이렇게 되면 forEach로직은 계속 반복해서 돌지만, 실행은 안된다.
        if(stop === false){
          if(doll !== 0) {
            location[move - 1] = 0;

            if(bucket[bucket.length - 1] === doll) {
              answer += 2;
              bucket.splice( bucket.length - 1, 1 );
            } else {
              bucket.push( doll );
            }


            bucket.push(doll)
            // 인형을 넣어주면 크레인을 멈춘다.(stop을 true로)
            stop = true;
          }
        }
      })
    } )

    return answer;
  }



*/
