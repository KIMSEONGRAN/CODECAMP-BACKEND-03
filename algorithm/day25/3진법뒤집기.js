function solution(n) {
  let aaa = n.toString(3);
  let bbb = [];
  for (let i = aaa.length - 1; i >= 0; i--) {
    bbb.push(aaa[i]);
  }
  return Number.parseInt(bbb.join(""), 3);
}
