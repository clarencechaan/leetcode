/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  let grid = [];
  for (let i = 0; i < n; i++) grid.push(Array(n).fill(1));
  for (const [r, c] of mines) grid[r][c] = 0;

  function maxOrderPlusAt(r, c, grid) {
    let i = 0;
    while (
      grid[r - i]?.[c] &&
      grid[r + i]?.[c] &&
      grid[r][c - i] &&
      grid[r][c + i]
    )
      i++;
    return i;
  }

  let maxOrder = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      maxOrder = Math.max(maxOrder, maxOrderPlusAt(i, j, grid));

  return maxOrder;
};

console.log(orderOfLargestPlusSign(3, [[0, 0]]));
