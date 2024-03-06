/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  const n = grid.length;
  const m = grid[0].length;

  let sumMatrix = [];
  for (let i = 0; i < n; i++) sumMatrix.push([]);

  for (let i = 0; i < n; i++) {
    let rowSum = 0;
    for (let j = 0; j < m; j++) {
      rowSum += grid[i][j];
      sumMatrix[i][j] = (sumMatrix[i - 1]?.[j] || 0) + rowSum;
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (sumMatrix[i][j] <= k) result++;

  return result;
};

console.log(
  countSubmatrices(
    [
      [7, 6, 3],
      [6, 6, 1],
    ],
    18
  )
);
