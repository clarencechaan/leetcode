/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
  let ans = 1;
  for (let i = 2; i <= n; i++) ans += 4 * (i - 1);
  return ans;
};

console.log(coloredCells(2));

// n 1 2  3  4
// + 1 4  8 12
// t 1 5 13 25
