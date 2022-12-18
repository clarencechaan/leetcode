/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let sums = [];
  for (let i = 0; i < m; i++) sums.push([]);
  sums[m - 1][n - 1] = grid[m - 1][n - 1];

  for (let i = m - 1; i >= 0; i--)
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1 && j === n - 1) continue;
      const right =
        sums[i + 1]?.[j] !== undefined ? sums[i + 1]?.[j] : Infinity;
      const down = sums[i][j + 1] !== undefined ? sums[i][j + 1] : Infinity;
      sums[i][j] = Math.min(right, down) + grid[i][j];
    }

  return sums[0][0];
};

console.log(
  minPathSum([
    [0, 0],
    [0, 0],
  ])
);
