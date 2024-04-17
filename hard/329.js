/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  // 1. create recursive helper function `recursiveLongestIncreasingPath(row, col)`
  //    that returns the longest increasing path from `matrix[row][col]`
  // 2. use helper function on every value of `row` and `col` to find the length
  //    of the longest increasing path in `matrix`

  const n = matrix.length;
  const m = matrix[0].length;
  const memo = Array(n)
    .fill()
    .map(() => []);

  function recursiveLongestIncreasingPath(row, col) {
    if (memo[row][col] >= 0) return memo[row][col];
    const val = matrix[row][col];
    let result = 1;
    if (matrix[row - 1]?.[col] > val)
      result = Math.max(
        result,
        1 + recursiveLongestIncreasingPath(row - 1, col)
      );
    if (matrix[row + 1]?.[col] > val)
      result = Math.max(
        result,
        1 + recursiveLongestIncreasingPath(row + 1, col)
      );
    if (matrix[row][col - 1] > val)
      result = Math.max(
        result,
        1 + recursiveLongestIncreasingPath(row, col - 1)
      );
    if (matrix[row][col + 1] > val)
      result = Math.max(
        result,
        1 + recursiveLongestIncreasingPath(row, col + 1)
      );
    memo[row][col] = result;
    return result;
  }

  let result = 0;
  for (let row = 0; row < n; row++)
    for (let col = 0; col < m; col++)
      result = Math.max(result, recursiveLongestIncreasingPath(row, col));
  return result;
};

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ])
);
