/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const minGrid = Array(n)
    .fill()
    .map(() => []);
  const maxGrid = Array(n)
    .fill()
    .map(() => []);

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      minGrid[i][j] = Math.min(
        minGrid[i - 1]?.[j] || Infinity,
        minGrid[i][j - 1] || Infinity,
        grid[i][j]
      );

  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      maxGrid[i][j] = Math.max(
        maxGrid[i + 1]?.[j] || 0,
        maxGrid[i][j + 1] || 0,
        grid[i][j]
      );

  let ans = -Infinity;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      ans = Math.max(
        ans,
        maxGrid[i][j] - (minGrid[i - 1]?.[j] || Infinity),
        maxGrid[i][j] - (minGrid[i][j - 1] || Infinity)
      );

  return ans;
};

console.log(
  maxScore([
    [9, 5, 7, 3],
    [8, 9, 6, 1],
    [6, 7, 14, 3],
    [2, 5, 3, 1],
  ])
);
