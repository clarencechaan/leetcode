/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const n = grid.length;

  const memo = {};

  function traverse(row1 = 0, col1 = 0, row2 = 0, col2 = 0) {
    if (
      grid[row1]?.[col1] === undefined ||
      grid[row1][col1] === -1 ||
      grid[row2]?.[col2] === undefined ||
      grid[row2][col2] === -1 ||
      (row2 < row1 && col2 > col1)
    )
      return -Infinity;

    const str = `${row1},${col1},${row2},${col2}`;
    if (memo[str] !== undefined) return memo[str];

    const cherries =
      grid[row1][col1] +
      (row1 !== row2 || col1 !== col2 ? grid[row2][col2] : 0);

    if (row1 === n - 1 && col1 === n - 1 && row2 === n - 1 && col2 === n - 1)
      return cherries;

    let result =
      cherries +
      Math.max(
        traverse(row1 + 1, col1, row2 + 1, col2),
        traverse(row1 + 1, col1, row2, col2 + 1),
        traverse(row1, col1 + 1, row2 + 1, col2),
        traverse(row1, col1 + 1, row2, col2 + 1)
      );

    memo[str] = result;
    return result;
  }

  return Math.max(0, traverse());
};

console.log(
  cherryPickup([
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1],
  ])
);
