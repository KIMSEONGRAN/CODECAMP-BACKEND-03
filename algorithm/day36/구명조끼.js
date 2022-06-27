function solution(people, limit) {
    people.sort((a,b) => b-a);

    let count = 0;
    
    for (let i = 0; i < people.length; i++ ){
        if(people[i]+people[people.length - 1] <= limit){
            count++;
            people.pop();
          } else {
            count++;

          }
    }
    console.log(count)
    return count;

}

solution([70, 50, 80, 50], 100)