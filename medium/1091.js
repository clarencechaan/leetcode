/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] === 1) grid[i][j] = null;
      else grid[i][j] = -1;
  if (grid[0][0] === -1) grid[0][0] = 1;

  function recurse(depth = 1) {
    let prev = [];
    for (const row of grid) prev.push([...row]);

    let done = true;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        if (prev[i][j] === depth) {
          done = false;
          if (i === n - 1 && j === n - 1) return depth;
          if (prev[i - 1]?.[j] === -1) grid[i - 1][j] = depth + 1;
          if (prev[i - 1]?.[j - 1] === -1) grid[i - 1][j - 1] = depth + 1;
          if (prev[i - 1]?.[j + 1] === -1) grid[i - 1][j + 1] = depth + 1;
          if (prev[i + 1]?.[j] === -1) grid[i + 1][j] = depth + 1;
          if (prev[i + 1]?.[j - 1] === -1) grid[i + 1][j - 1] = depth + 1;
          if (prev[i + 1]?.[j + 1] === -1) grid[i + 1][j + 1] = depth + 1;
          if (prev[i]?.[j - 1] === -1) grid[i][j - 1] = depth + 1;
          if (prev[i]?.[j + 1] === -1) grid[i][j + 1] = depth + 1;
        }

    return done ? -1 : recurse(depth + 1);
  }

  return recurse();
};

console.log(
  shortestPathBinaryMatrix([
    [0, 1],
    [1, 0],
  ])
);
