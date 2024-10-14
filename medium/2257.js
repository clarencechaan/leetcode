/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  const grid = Array(m)
    .fill()
    .map(() => Array(n).fill(0));

  for (const [y, x] of guards) grid[y][x] = "G";
  for (const [y, x] of walls) grid[y][x] = "W";

  function fillGuarded(y, x) {
    for (let i = x + 1; i < n && (grid[y][i] === 0 || grid[y][i] === 1); i++)
      grid[y][i] = 1;
    for (let i = x - 1; i >= 0 && (grid[y][i] === 0 || grid[y][i] === 1); i--)
      grid[y][i] = 1;
    for (let i = y + 1; i < m && (grid[i][x] === 0 || grid[i][x] === 1); i++)
      grid[i][x] = 1;
    for (let i = y - 1; i >= 0 && (grid[i][x] === 0 || grid[i][x] === 1); i--)
      grid[i][x] = 1;
  }

  for (const [y, x] of guards) fillGuarded(y, x);

  return grid.reduce(
    (sum, row) =>
      sum + row.reduce((sum, cell) => (cell === 0 ? 1 : 0) + sum, 0),
    0
  );
};

console.log(
  countUnguarded(
    (m = 4),
    (n = 6),
    (guards = [
      [0, 0],
      [1, 1],
      [2, 3],
    ]),
    (walls = [
      [0, 1],
      [2, 2],
      [1, 4],
    ])
  )
);
