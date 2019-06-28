function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  } else {
    return fromN + sum(fromN + 1, toN);
  }
}

console.log(sum(3, 7));
module.exports = sum;

// function sum(0, 5) {
// 0 + (0+1) -- 1
// 1 + (1+1) -- 3
// 2 + (2+1) -- 5
// 3 + (3+1) -- 7
// 4 + (4+1) -- 9
// 25
//

// //   output = 0;
//   for (let i = 0; i < arr.length; i++) {
//     output += arr[i];
//     console.log(output);
//   }
//   return output;
// };
  
