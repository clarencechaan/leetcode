/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (matrix[i][j]) matrix[i][j] += matrix[i - 1]?.[j] || 0;

  let result = 0;
  for (const row of matrix) {
    row.sort((a, b) => (a > b ? -1 : 1));
    for (let i = 0; row[i]; i++) {
      const width = i + 1;
      const height = row[i];
      result = Math.max(result, width * height);
    }
  }

  return result;
};

console.log(
  largestSubmatrix([
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
  ])
);
