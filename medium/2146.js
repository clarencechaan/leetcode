/**
 * @param {number[][]} grid
 * @param {number[]} pricing
 * @param {number[]} start
 * @param {number} k
 * @return {number[][]}
 */
var highestRankedKItems = function (grid, pricing, start, k) {
  const n = grid.length;
  const m = grid[0].length;

  const distance = Array(n)
    .fill()
    .map(() => Array(m).fill(Infinity));

  const queue = [[start[0], start[1], 0]];
  for (const [row, col, dist] of queue) {
    if (!grid[row]?.[col] || distance[row][col] !== Infinity) continue;
    distance[row][col] = dist;
    queue.push([row - 1, col, dist + 1]);
    queue.push([row + 1, col, dist + 1]);
    queue.push([row, col - 1, dist + 1]);
    queue.push([row, col + 1, dist + 1]);
  }

  function isHigherRank([row1, col1], [row2, col2]) {
    if (distance[row1][col1] !== distance[row2][col2])
      return distance[row1][col1] < distance[row2][col2];
    if (grid[row1][col1] !== grid[row2][col2])
      return grid[row1][col1] < grid[row2][col2];
    if (row1 !== row2) return row1 < row2;
    return col1 < col2;
  }

  let result = [];
  for (let row = 0; row < n; row++)
    for (let col = 0; col < m; col++)
      if (
        distance[row][col] !== Infinity &&
        grid[row][col] > 1 &&
        pricing[0] <= grid[row][col] &&
        grid[row][col] <= pricing[1]
      )
        result.push([row, col]);

  result.sort((a, b) => (isHigherRank(a, b) ? -1 : 1));
  result = result.slice(0, k);

  return result;
};

console.log(
  highestRankedKItems(
    [
      [1, 2, 0, 1],
      [1, 3, 0, 1],
      [0, 2, 5, 1],
    ],
    [2, 5],
    [0, 0],
    3
  )
);
