/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  function isMagic(x, y) {
    const set = new Set();
    for (let i = y; i < y + 3; i++)
      for (let j = x; j < x + 3; j++) set.add(grid[i][j]);
    for (let i = 1; i <= 9; i++) if (!set.has(i)) return false;

    const sum = grid[y][x] + grid[y][x + 1] + grid[y][x + 2];

    function getRowSum(xt, yt) {
      return grid[yt][xt] + grid[yt][xt + 1] + grid[yt][xt + 2];
    }

    function getColSum(xt, yt) {
      return grid[yt][xt] + grid[yt + 1][xt] + grid[yt + 2][xt];
    }

    function getDiagSum1(xt, yt) {
      return grid[yt][xt] + grid[yt + 1][xt + 1] + grid[yt + 2][xt + 2];
    }

    function getDiagSum2(xt, yt) {
      return grid[yt][xt + 2] + grid[yt + 1][xt + 1] + grid[yt + 2][xt];
    }

    if (
      getRowSum(x, y) !== sum ||
      getRowSum(x, y + 1) !== sum ||
      getRowSum(x, y + 2) !== sum ||
      getColSum(x, y) !== sum ||
      getColSum(x + 1, y) !== sum ||
      getColSum(x + 2, y) !== sum ||
      getDiagSum1(x, y) !== sum ||
      getDiagSum2(x, y) !== sum
    )
      return false;
    return true;
  }

  const n = grid.length;
  const m = grid[0].length;

  let result = 0;
  for (let i = 0; i < n - 2; i++)
    for (let j = 0; j < m - 2; j++) if (isMagic(j, i)) result++;
  return result;
};

console.log(
  numMagicSquaresInside([
    [4, 3, 8, 4],
    [9, 5, 1, 9],
    [2, 7, 6, 2],
  ])
);
