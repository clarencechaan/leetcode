/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  let rowCount = Array(n).fill(0);
  let colCount = Array(m).fill(0);

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j]) {
        rowCount[i]++;
        colCount[j]++;
      }

  let result = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j] && (rowCount[i] > 1 || colCount[j] > 1)) result++;

  return result;
};

console.log(
  countServers([
    [1, 0],
    [1, 1],
  ])
);
