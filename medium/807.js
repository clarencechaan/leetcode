/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const n = grid.length;
  let rowMax = [];
  let colMax = [];

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < n; j++) max = Math.max(max, grid[i][j]);
    rowMax[i] = max;
  }

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < n; j++) max = Math.max(max, grid[j][i]);
    colMax[i] = max;
  }

  let result = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      result += Math.min(rowMax[i], colMax[j]) - grid[i][j];

  return result;
};

console.log(
  maxIncreaseKeepingSkyline([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
