/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  if (maxMove === 0) return 0;

  let grid = [];
  for (let i = 0; i < m; i++) grid.push(Array(n).fill(0n));

  for (let i = 0; i < m; i++) {
    grid[i][0]++;
    grid[i][n - 1]++;
  }

  for (let j = 0; j < n; j++) {
    grid[0][j]++;
    grid[m - 1][j]++;
  }

  function deepClone(grid) {
    let result = [];
    for (const row of grid) result.push([...row]);
    return result;
  }

  let result = grid[startRow][startColumn];

  for (let moves = 1; moves < maxMove; moves++) {
    let prev = deepClone(grid);
    for (let i = 0; i < m; i++)
      for (let j = 0; j < n; j++) {
        grid[i][j] = prev[i - 1]?.[j] || 0n;
        grid[i][j] += prev[i + 1]?.[j] || 0n;
        grid[i][j] += prev[i][j - 1] || 0n;
        grid[i][j] += prev[i][j + 1] || 0n;
      }
    result += grid[startRow][startColumn];
  }

  return Number(result % BigInt(Math.pow(10, 9) + 7));
};

console.log(findPaths(1, 3, 3, 0, 1));
