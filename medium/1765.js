/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  const n = isWater.length;
  const m = isWater[0].length;

  const maxMat = Array(n)
    .fill()
    .map(() => []);

  const queue = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (isWater[i][j]) queue.push([i, j, 0]);

  for (const [row, col, val] of queue) {
    if (row < 0 || row >= n || col < 0 || col >= m || maxMat[row]?.[col] >= 0)
      continue;
    maxMat[row][col] = val;
    queue.push([row - 1, col, val + 1]);
    queue.push([row + 1, col, val + 1]);
    queue.push([row, col - 1, val + 1]);
    queue.push([row, col + 1, val + 1]);
  }

  return maxMat;
};

console.log(
  highestPeak([
    [0, 1],
    [0, 0],
  ])
);
