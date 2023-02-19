/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  let xCells = new Set();
  let n = grid.length;

  for (let i = 0; i < n; i++)
    xCells
      .add(i + "," + i)
      .add(n - 1 - i + "," + i)
      .add(i + "," + (n - 1 - i))
      .add(n - 1 - i + "," + (n - 1 - i));

  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (
        (xCells.has(i + "," + j) && grid[i][j] === 0) ||
        (!xCells.has(i + "," + j) && grid[i][j] !== 0)
      )
        return false;

  return true;
};

console.log(
  checkXMatrix([
    [5, 7, 0],
    [0, 3, 1],
    [0, 5, 0],
  ])
);
