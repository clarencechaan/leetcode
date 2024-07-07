/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  let start;
  let end;
  for (let y = 0; y < n; y++)
    for (let x = 0; x < m; x++)
      if (grid[y][x] === 1) start = [x, y];
      else if (grid[y][x] === 2) end = [x, y];

  const freeSpaces = grid.reduce(
    (sum, row) =>
      sum + row.reduce((sum, cell) => sum + (cell === -1 ? 0 : 1), 0),
    0
  );

  function recursion(
    x = start[0],
    y = start[1],
    seen = Array(n)
      .fill()
      .map(() => Array(m).fill(0)),
    visitedCount = 1
  ) {
    if (x < 0 || x >= m || y < 0 || y >= n) return 0;
    if (seen[y][x]) return 0;
    if (grid[y][x] === -1) return 0;
    if (visitedCount === freeSpaces && x === end[0] && y === end[1]) return 1;

    seen[y][x] = 1;

    const left = recursion(x - 1, y, seen, visitedCount + 1);
    const right = recursion(x + 1, y, seen, visitedCount + 1);
    const up = recursion(x, y - 1, seen, visitedCount + 1);
    const down = recursion(x, y + 1, seen, visitedCount + 1);

    seen[y][x] = 0;

    return left + right + up + down;
  }

  return recursion();
};

console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1],
  ])
);
