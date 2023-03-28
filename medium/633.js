/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let squares = new Set([0]);

  for (let i = 1; i * i <= c; i++) squares.add(i * i);
  for (const square of squares) if (squares.has(c - square)) return true;

  return false;
};

console.log(judgeSquareSum(26));
