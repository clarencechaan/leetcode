/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
  const m = grid[0].length;
  const n = grid.length;
  let seen = [];
  for (let i = 0; i < n; i++) seen.push([]);

  function hasCycleAt(x, y, val = grid[y][x], pX, pY) {
    if (grid[y]?.[x] !== val) return false;
    if (seen[y][x]) return true;
    seen[y][x] = true;
    return (
      ((x - 1 !== pX || y !== pY) && hasCycleAt(x - 1, y, val, x, y)) ||
      ((x + 1 !== pX || y !== pY) && hasCycleAt(x + 1, y, val, x, y)) ||
      ((x !== pX || y - 1 !== pY) && hasCycleAt(x, y - 1, val, x, y)) ||
      ((x !== pX || y + 1 !== pY) && hasCycleAt(x, y + 1, val, x, y))
    );
  }

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (!seen[i][j] && hasCycleAt(j, i)) return true;
  return false;
};

console.log(
  containsCycle([
    ["a", "a", "a", "a"],
    ["a", "b", "b", "a"],
    ["a", "b", "b", "a"],
    ["a", "a", "a", "a"],
  ])
);
