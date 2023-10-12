/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  const m = grid[0].length;
  const n = grid.length;

  let costGrid = [];
  for (let i = 0; i < n; i++) costGrid.push(Array(m).fill(Infinity));

  costGrid[n - 1][m - 1] = 0;

  function cloneGrid(grid) {
    let result = [];
    for (const row of grid) result.push([...row]);
    return result;
  }

  for (let done = false; !done; ) {
    done = true;
    let nextCostGrid = cloneGrid(costGrid);
    for (let i = 0; i < n; i++)
      for (let j = 0; j < m; j++) {
        nextCostGrid[i][j] = Math.min(
          nextCostGrid[i][j],
          costGrid[i - 1]?.[j] >= 0
            ? costGrid[i - 1][j] + (grid[i][j] === 4 ? 0 : 1)
            : Infinity,
          costGrid[i + 1]?.[j] >= 0
            ? costGrid[i + 1][j] + (grid[i][j] === 3 ? 0 : 1)
            : Infinity,
          costGrid[i][j - 1] >= 0
            ? costGrid[i][j - 1] + (grid[i][j] === 2 ? 0 : 1)
            : Infinity,
          costGrid[i][j + 1] >= 0
            ? costGrid[i][j + 1] + (grid[i][j] === 1 ? 0 : 1)
            : Infinity
        );
        if (nextCostGrid[i][j] !== costGrid[i][j]) done = false;
      }
    costGrid = nextCostGrid;
  }

  return costGrid[0][0];
};

console.log(
  minCost([
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
  ])
);
