/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function (grid, moveCost) {
  const m = grid[0].length;
  const n = grid.length;

  let memo = [];
  for (let i = 0; i < n; i++) memo.push([]);

  function recurse(i = -1, j = -1) {
    if (i === n - 1) return grid[i][j];
    if (memo[i + 1][j] !== undefined) return memo[i + 1][j];

    let min = Infinity;
    for (let k = 0; k < m; k++)
      min = Math.min(
        min,
        (grid[i]?.[j] || 0) +
          (moveCost[grid[i]?.[j]]?.[k] || 0) +
          recurse(i + 1, k)
      );
    memo[i + 1][j] = min;
    return min;
  }

  return recurse();
};

console.log(
  minPathCost(
    [
      [5, 3],
      [4, 0],
      [2, 1],
    ],
    [
      [9, 8],
      [1, 5],
      [10, 12],
      [18, 6],
      [2, 4],
      [14, 3],
    ]
  )
);
