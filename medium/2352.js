/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;

  function isRowColEqual(r, c) {
    for (let i = 0; i < n; i++) if (grid[r][i] !== grid[i][c]) return false;
    return true;
  }

  let result = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) if (isRowColEqual(i, j)) result++;

  return result;
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);
