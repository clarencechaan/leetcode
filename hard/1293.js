/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
  const n = grid.length;
  const m = grid[0].length;
  const minSteps = Array(k + 1)
    .fill()
    .map(() =>
      Array(n)
        .fill()
        .map(() => [])
    );

  function shouldSkip(x, y, steps, eliminated) {
    if (x < 0 || x >= m || y < 0 || y >= n) return true;
    if (grid[y][x]) eliminated++;
    if (eliminated > k) return true;
    for (let i = 0; i <= eliminated; i++)
      if (minSteps[i][y][x] <= steps) return true;
  }

  const queue = [[0, 0, 0, 0]];
  for (let [x, y, steps, eliminated] of queue) {
    if (shouldSkip(x, y, steps, eliminated)) continue;
    if (grid[y][x]) eliminated++;
    minSteps[eliminated][y][x] = steps;
    queue.push([x - 1, y, steps + 1, eliminated]);
    queue.push([x + 1, y, steps + 1, eliminated]);
    queue.push([x, y - 1, steps + 1, eliminated]);
    queue.push([x, y + 1, steps + 1, eliminated]);
  }

  let result = Infinity;
  for (let i = 0; i <= k; i++)
    result = Math.min(result, minSteps[i][n - 1][m - 1] ?? Infinity);
  if (result === Infinity) return -1;
  return result;
};
