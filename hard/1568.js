/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  function markIsland(row, col) {
    if (grid[row]?.[col] !== 1) return;
    grid[row][col] = "I";
    markIsland(row - 1, col);
    markIsland(row + 1, col);
    markIsland(row, col - 1);
    markIsland(row, col + 1);
  }

  const islands = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j] === 1) {
        markIsland(i, j);
        islands.push([i, j]);
      }

  if (islands.length !== 1) return 0;
  const landCount = grid.reduce(
    (sum, row) =>
      sum + row.reduce((sum, cell) => sum + (cell === "I" ? 1 : 0), 0),
    0
  );
  if (landCount <= 2) return landCount;

  function getIslandSize(
    row,
    col,
    seen = Array(n)
      .fill()
      .map(() => [])
  ) {
    if (grid[row]?.[col] !== "I" || seen[row][col]) return 0;
    seen[row][col] = 1;
    return (
      1 +
      getIslandSize(row - 1, col, seen) +
      getIslandSize(row + 1, col, seen) +
      getIslandSize(row, col - 1, seen) +
      getIslandSize(row, col + 1, seen)
    );
  }

  const islandCells = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j] === "I") islandCells.push([i, j]);

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      if (grid[i][j] !== "I") continue;
      // try delete
      grid[i][j] = 0;
      let islandSize;
      for (
        let islandIdx = 0;
        !islandSize && islandIdx < islandCells.length;
        islandIdx++
      )
        islandSize = getIslandSize(...islandCells[islandIdx]);
      if (islandSize < landCount - 1) return 1;
      grid[i][j] = "I";
    }

  return 2;
};

console.log(
  minDays([
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
);
