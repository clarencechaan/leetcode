/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const n = points.length;
  const m = points[0].length;

  const maxMatrix = [];
  maxMatrix[0] = [...points[0]];

  function getMaxRow(y) {
    const left = [];
    const right = [];
    for (let x = 0; x < m; x++)
      left[x] = Math.max(maxMatrix[y - 1][x], left[x - 1] - 1 || -Infinity);
    for (let x = m - 1; x >= 0; x--)
      right[x] = Math.max(maxMatrix[y - 1][x], right[x + 1] - 1 || -Infinity);
    const maxRow = [...points[y]];
    for (let x = 0; x < m; x++) maxRow[x] += Math.max(left[x], right[x]);
    return maxRow;
  }

  for (let y = 1; y < n; y++) maxMatrix[y] = getMaxRow(y);

  return Math.max(...maxMatrix[n - 1]);
};

console.log(
  maxPoints([
    [1, 2, 3],
    [1, 5, 1],
    [3, 1, 1],
  ])
);
