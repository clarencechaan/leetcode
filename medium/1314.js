/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  const m = mat[0].length;
  const n = mat.length;

  let result = [];
  for (let i = 0; i < n; i++) result[i] = Array(m).fill(0);

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      for (let y = Math.max(0, i - k); y <= Math.min(n - 1, i + k); y++)
        for (let x = Math.max(0, j - k); x <= Math.min(m - 1, j + k); x++)
          result[i][j] += mat[y][x];

  return result;
};

console.log(
  matrixBlockSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);
