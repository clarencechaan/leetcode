/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const n = grid.length;

  function markSecondIsland(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= n || grid[i][j] !== 1) return;
    grid[i][j] = 2;
    markSecondIsland(i - 1, j);
    markSecondIsland(i + 1, j);
    markSecondIsland(i, j - 1);
    markSecondIsland(i, j + 1);
  }

  loop: for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j]) {
        markSecondIsland(i, j);
        break loop;
      }

  let island1Coords = [];
  let island2Coords = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] === 1) island1Coords.push([i, j]);
      else if (grid[i][j] === 2) island2Coords.push([i, j]);

  let minDistance = Infinity;
  for (const [i1, j1] of island1Coords)
    for (const [i2, j2] of island2Coords)
      minDistance = Math.min(
        minDistance,
        Math.abs(i2 - i1) + Math.abs(j2 - j1) - 1
      );

  return minDistance;
};

console.log(
  shortestBridge([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ])
);
