/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  // naive solution:
  // for every 0, check the largest island in the grid after changing the 0 to 1

  // better solution
  // mark every cell of each island with the size of the island along with an
  // island id
  // check every 0, add the sum of islands connected by changing the 0 to 1

  const n = grid.length;

  function markIslandID(x, y, id) {
    if (!grid[y]?.[x] || typeof grid[y][x] === "object") return;
    grid[y][x] = { id, size: null };
    markIslandID(x - 1, y, id);
    markIslandID(x + 1, y, id);
    markIslandID(x, y - 1, id);
    markIslandID(x, y + 1, id);
  }

  let id = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) if (grid[i][j] === 1) markIslandID(j, i, id++);

  function getSize(x, y) {
    if (!grid[y]?.[x] || grid[y][x].seen) return 0;
    grid[y][x].seen = true;
    return (
      1 +
      getSize(x - 1, y) +
      getSize(x + 1, y) +
      getSize(x, y - 1) +
      getSize(x, y + 1)
    );
  }

  function markIslandSize(x, y, size) {
    if (!grid[y]?.[x] || grid[y][x].size) return;
    grid[y][x].size = size;
    markIslandSize(x - 1, y, size);
    markIslandSize(x + 1, y, size);
    markIslandSize(x, y - 1, size);
    markIslandSize(x, y + 1, size);
  }

  const idSize = [];

  let ans = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] && !grid[i][j].seen) {
        const size = getSize(j, i);
        idSize[grid[i][j].id] = size;
        ans = Math.max(ans, size);
        markIslandSize(j, i, size);
      }

  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        const islands = new Set();
        if (grid[i - 1]?.[j]) islands.add(grid[i - 1][j].id);
        if (grid[i + 1]?.[j]) islands.add(grid[i + 1][j].id);
        if (grid[i][j - 1]) islands.add(grid[i][j - 1].id);
        if (grid[i][j + 1]) islands.add(grid[i][j + 1].id);
        let sum = 1;
        for (const id of islands) sum += idSize[id];
        ans = Math.max(ans, sum);
      }
    }

  return ans;
};

console.log(
  largestIsland([
    [1, 0],
    [0, 1],
  ])
);
