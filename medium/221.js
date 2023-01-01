/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let max = 0;
  const m = matrix[0].length;
  const n = matrix.length;

  function squareExists(x, y, size) {
    if (x + size > m || y + size > n) return false;
    for (let i = y; i < y + size; i++)
      for (let j = x; j < x + size; j++) if (matrix[i][j] === "0") return false;
    return true;
  }

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) while (squareExists(j, i, max + 1)) max++;

  return max ** 2;
};

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);
