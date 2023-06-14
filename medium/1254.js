/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  function isClosed(x, y) {
    if (x < 0 || x >= m || y < 0 || y >= n) return false;
    if (grid[y][x] === 0) {
      grid[y][x] = 2;
      const westClosed = isClosed(x - 1, y);
      const eastClosed = isClosed(x + 1, y);
      const northClosed = isClosed(x, y - 1);
      const southClosed = isClosed(x, y + 1);
      return westClosed && eastClosed && northClosed && southClosed;
    }
    return true;
  }

  let result = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j] === 0 && isClosed(j, i)) result++;

  return result;
};

console.log(
  closedIsland([
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0],
  ])
);
