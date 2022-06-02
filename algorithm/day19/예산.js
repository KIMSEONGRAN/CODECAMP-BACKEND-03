// function solution(d, budget) {
//   for (let i = 0; i < d.length - 1; i++) {
//     for (let j = 1 + i; j < d.length; j++) {
//       if (d[i] > d[j]) {
//         [d[i], d[j]] = [d[j], d[i]];
//       }
//     }
//   }

//   let sum = 0;
//   let count = 0;
//   for (let g = 0; g < d.length; g++) {
//     if (sum + d[g] <= budget) {
//       sum = sum + d[g];
//       console.log("sum", sum);
//       count++;
//       console.log("count", count);
//     }
//   }
//   return count;
// }
