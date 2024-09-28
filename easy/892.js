/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  const n = grid.length;
  let walls = 0;
  let topAndBottom = 0;

  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      walls += Math.max(0, grid[i][j] - (grid[i - 1]?.[j] || 0));
      walls += Math.max(0, grid[i][j] - (grid[i + 1]?.[j] || 0));
      walls += Math.max(0, grid[i][j] - (grid[i][j - 1] || 0));
      walls += Math.max(0, grid[i][j] - (grid[i][j + 1] || 0));

      if (grid[i][j]) topAndBottom += 2;
    }

  return walls + topAndBottom;
};

console.log(
  surfaceArea([
    [1, 2],
    [3, 4],
  ])
);
