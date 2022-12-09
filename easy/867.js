/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let transposed = [];

  for (let i = 0; i < matrix[0].length; i++) transposed.push([]);
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[0].length; j++) transposed[j].push(matrix[i][j]);

  return transposed;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
