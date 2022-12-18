/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  function nullifyRowAndColumn(x, y) {
    for (let i = 0; i < matrix.length; i++)
      if (matrix[i][x] !== 0) matrix[i][x] = null;
    for (let i = 0; i < matrix[0].length; i++)
      if (matrix[y][i] !== 0) matrix[y][i] = null;
  }

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[0].length; j++)
      if (matrix[i][j] === 0) nullifyRowAndColumn(j, i);

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[0].length; j++)
      if (matrix[i][j] === null) matrix[i][j] = 0;

  return matrix;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
