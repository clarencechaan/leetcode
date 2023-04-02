/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid[0].length;
  const n = grid.length;

  function areaOfIsland(r, c) {
    if (r < 0 || r >= n || c < 0 || c >= m || grid[r][c] !== 1) return 0;
    grid[r][c] = 2;
    return (
      1 +
      areaOfIsland(r - 1, c) +
      areaOfIsland(r + 1, c) +
      areaOfIsland(r, c - 1) +
      areaOfIsland(r, c + 1)
    );
  }

  let max = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j] === 1) max = Math.max(max, areaOfIsland(i, j));
  return max;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
