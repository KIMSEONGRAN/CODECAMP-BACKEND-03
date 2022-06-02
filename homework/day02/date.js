function printTime(){
    let a = new Date();
    let yyyy = a.getFullYear();
    let mm = String(a.getMonth()) .padStart(2,'0');
    let dd = String(a.getDate()) .padStart(2,'0');
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();

    console.log(`오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hour}:${min}:${sec}입니다.`);
}
printTime();