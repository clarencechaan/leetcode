/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let x = n;
  let left = 0;
  let right = x;
  for (let i = 0; i <= x; i++) left += i;

  for (let i = x; i >= 1; i--) {
    if (left === right) return i;
    left -= i;
    right += i - 1;
  }

  return -1;
};

console.log(pivotInteger(4));

// 1 2 3 4 5 6 7 8 / 8
// 1 2 3 4 5 6 7 / 7 8
// 1 2 3 4 5 6 / 6 7 8
