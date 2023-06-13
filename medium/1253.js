/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function (upper, lower, colsum) {
  const n = colsum.length;
  let matrix = [Array(n).fill(0), Array(n).fill(0)];
  let goal = colsum.reduce((sum, val) => sum + val, 0);
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (colsum[i] === 2) {
      if (upper <= 0 || lower <= 0) return [];
      matrix[0][i] = 1;
      matrix[1][i] = 1;
      upper--;
      lower--;
      count += 2;
    }
  }

  for (let i = 0; i < n; i++) {
    if (colsum[i] === 1) {
      if (upper > 0) {
        matrix[0][i] = 1;
        upper--;
        count++;
      } else if (lower > 0) {
        matrix[1][i] = 1;
        lower--;
        count++;
      }
    }
  }

  if (!upper && !lower && count === goal) return matrix;
  else return [];
};

console.log(reconstructMatrix(4, 7, [2, 1, 2, 2, 1, 1, 1]));
