/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const m = grid[0].length;
  const n = grid.length;

  function recurse(x, y, history = new Set()) {
    let nextHistory = new Set(history);
    nextHistory.add(x + "," + y);

    let max = 0;
    if (grid[y][x - 1] && !nextHistory.has(x - 1 + "," + y))
      max = Math.max(max, recurse(x - 1, y, nextHistory));
    if (grid[y][x + 1] && !nextHistory.has(x + 1 + "," + y))
      max = Math.max(max, recurse(x + 1, y, nextHistory));
    if (grid[y - 1]?.[x] && !nextHistory.has(x + "," + (y - 1)))
      max = Math.max(max, recurse(x, y - 1, nextHistory));
    if (grid[y + 1]?.[x] && !nextHistory.has(x + "," + (y + 1)))
      max = Math.max(max, recurse(x, y + 1, nextHistory));

    return grid[y][x] + max;
  }

  let result = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j]) result = Math.max(result, recurse(j, i));
  return result;
};

console.log(
  getMaximumGold([
    [1, 0, 7],
    [2, 0, 6],
    [3, 4, 5],
    [0, 3, 0],
    [9, 0, 20],
  ])
);
