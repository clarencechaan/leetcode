/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const m = grid[0].length;
  const n = grid.length;

  function getEndCol(startCol) {
    let x = startCol;
    let y = 0;
    while (y < n)
      if (grid[y][x] === 1 && grid[y][x + 1] === 1) {
        y++;
        x++;
      } else if (grid[y][x] === -1 && grid[y][x - 1] === -1) {
        y++;
        x--;
      } else return -1;
    return x;
  }

  let result = [];
  for (let i = 0; i < m; i++) result[i] = getEndCol(i);
  return result;
};

console.log(
  findBall([
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
  ])
);
