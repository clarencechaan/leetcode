/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
  const m = grid[0].length;
  const n = grid.length;
  let maxSidelength = Math.max(m, n);

  function doesSquareExist(x, y, sidelength) {
    if (x + sidelength > m) return false;
    if (y + sidelength > n) return false;
    for (let i = 0; i < sidelength; i++)
      if (
        !grid[y][x + i] ||
        !grid[y + sidelength - 1][x + i] ||
        !grid[y + i][x] ||
        !grid[y + i][x + sidelength - 1]
      )
        return false;
    return true;
  }

  for (let s = maxSidelength; s > 0; s--)
    for (let i = 0; i < n; i++)
      for (let j = 0; j < m; j++) if (doesSquareExist(j, i, s)) return s * s;

  return 0;
};

console.log(
  largest1BorderedSquare([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
