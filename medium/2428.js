/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  const m = grid[0].length;
  const n = grid.length;

  function getHourglassSum(row, col) {
    let sum = grid[row + 1][col + 1];
    for (let i = col; i < col + 3; i++) {
      sum += grid[row][i];
      sum += grid[row + 2][i];
    }
    return sum;
  }

  let max = 0;
  for (let i = 0; i < n - 2; i++)
    for (let j = 0; j < m - 2; j++) max = Math.max(max, getHourglassSum(i, j));
  return max;
};

console.log(
  maxSum([
    [6, 2, 1, 3],
    [4, 2, 1, 5],
    [9, 2, 8, 7],
    [4, 1, 2, 9],
  ])
);
