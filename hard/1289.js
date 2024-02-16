/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const n = grid.length;
  let minGrid = [[...grid[0]]];
  for (let i = 1; i < n; i++) minGrid.push([]);
  for (let i = 1; i < n; i++)
    for (let j = 0; j < n; j++) {
      let min = Infinity;
      for (let k = 0; k < n; k++)
        if (j === k) continue;
        else min = Math.min(min, minGrid[i - 1][k]);
      minGrid[i][j] = grid[i][j] + min;
    }

  return minGrid[n - 1].reduce((min, val) => Math.min(min, val), Infinity);
};

console.log(
  minFallingPathSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
