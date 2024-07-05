/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPyramids = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  const rowSums = [];
  for (let i = 0; i < n; i++) {
    rowSums[i] = [0];
    for (let j = 0; j < m; j++) rowSums[i][j + 1] = rowSums[i][j] + grid[i][j];
  }

  function isRowValid(x1, x2, y) {
    if (x1 < 0 || x2 >= m + 1 || y < 0 || y >= n) return false;
    return rowSums[y][x2] - rowSums[y][x1] === x2 - x1;
  }

  function getPyramidHeight(x, y) {
    let h = 0;
    let x1 = x;
    let x2 = x + 1;
    while (isRowValid(x1, x2, y)) {
      h++;
      x1--;
      x2++;
      y++;
    }

    return h;
  }

  function getInversePyramidHeight(x, y) {
    let h = 0;
    let x1 = x;
    let x2 = x + 1;
    while (isRowValid(x1, x2, y)) {
      h++;
      x1--;
      x2++;
      y--;
    }

    return h;
  }

  let ans = 0;
  for (let y = 0; y < grid.length; y++)
    for (let x = 0; x < grid[0].length; x++) {
      const h1 = getPyramidHeight(x, y);
      const h2 = getInversePyramidHeight(x, y);
      if (h1 >= 2) ans += h1 - 1;
      if (h2 >= 2) ans += h2 - 1;
    }

  return ans;
};

console.log(
  countPyramids([
    [0, 1, 1, 0],
    [1, 1, 1, 1],
  ])
);
