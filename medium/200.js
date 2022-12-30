/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid[0].length;
  const n = grid.length;
  let count = 0;

  function nullifyIsland(x, y) {
    if (
      x < 0 ||
      y < 0 ||
      x >= m ||
      y >= n ||
      grid[y][x] === "0" ||
      grid[y][x] === "N"
    )
      return;
    grid[y][x] = "N";
    nullifyIsland(x - 1, y);
    nullifyIsland(x + 1, y);
    nullifyIsland(x, y - 1);
    nullifyIsland(x, y + 1);
  }

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j] === "1") {
        count++;
        nullifyIsland(j, i);
      }

  return count;
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
