/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const m = grid[0].length;
  const n = grid.length;

  function markBoundaryLand(i, j) {
    if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] !== 1) return;
    grid[i][j] = 2;
    markBoundaryLand(i - 1, j);
    markBoundaryLand(i + 1, j);
    markBoundaryLand(i, j - 1);
    markBoundaryLand(i, j + 1);
  }

  for (let j = 0; j < m; j++) markBoundaryLand(0, j);
  for (let j = 0; j < m; j++) markBoundaryLand(n - 1, j);
  for (let i = 0; i < n; i++) markBoundaryLand(i, 0);
  for (let i = 0; i < n; i++) markBoundaryLand(i, m - 1);

  let result = 0;
  for (const row of grid) for (const cell of row) if (cell === 1) result++;
  return result;
};

console.log(
  numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
);
