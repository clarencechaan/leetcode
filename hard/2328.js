/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  let numPaths = [];
  for (let i = 0; i < n; i++) numPaths.push([]);

  function getNumPathsAt(row, col) {
    if (row < 0 || row >= n || col < 0 || col >= m) return 0;
    if (numPaths[row][col]) return numPaths[row][col];
    let left =
      grid[row][col - 1] > grid[row][col] ? getNumPathsAt(row, col - 1) : 0;
    let right =
      grid[row][col + 1] > grid[row][col] ? getNumPathsAt(row, col + 1) : 0;
    let up =
      grid[row - 1]?.[col] > grid[row][col] ? getNumPathsAt(row - 1, col) : 0;
    let down =
      grid[row + 1]?.[col] > grid[row][col] ? getNumPathsAt(row + 1, col) : 0;
    numPaths[row][col] = (1 + left + right + up + down) % (10 ** 9 + 7);
    return numPaths[row][col];
  }

  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) getNumPathsAt(i, j);

  let result = 0;
  for (const row of numPaths)
    for (const cell of row) result = (result + cell) % (10 ** 9 + 7);
  return result;
};

console.log(
  countPaths([
    [1, 1],
    [3, 4],
  ])
);
