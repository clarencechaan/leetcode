/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[m - 1][n - 1]) return 0;

  let paths = [];
  for (let i = 0; i < m; i++) {
    paths.push([]);
    for (let j = 0; j < n; j++) if (obstacleGrid[i][j]) paths[i][j] = 0;
  }
  paths[m - 1][n - 1] = 1;

  for (let i = m - 1; i >= 0; i--)
    for (let j = n - 1; j >= 0; j--) {
      if ((i < m - 1 || j < n - 1) && paths[i][j] !== 0)
        paths[i][j] = (paths[i + 1]?.[j] || 0) + (paths[i]?.[j + 1] || 0);
    }

  return paths[0][0];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ])
);
