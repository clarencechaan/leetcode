/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  let minMat = [];
  for (let i = 0; i < n; i++) minMat.push([]);
  minMat[0] = [...matrix[0]];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      minMat[i][j] =
        Math.min(
          minMat[i - 1][j - 1] || Infinity,
          minMat[i - 1][j],
          minMat[i - 1][j + 1] || Infinity
        ) + matrix[i][j];
    }
  }

  return minMat[n - 1].reduce((min, val) => Math.min(min, val), Infinity);
};

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
);
