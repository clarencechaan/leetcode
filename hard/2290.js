/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  const minGrid = Array(n)
    .fill()
    .map(() => []);

  let queue = [[n - 1, m - 1]];
  let obstacles = 0;
  while (minGrid[0][0] === undefined) {
    let nextQueue = new Set();
    for (const [row, col] of queue) {
      if (grid[row]?.[col] === undefined) continue;
      if (minGrid[row][col] !== undefined) continue;
      if (grid[row][col] === 0) {
        minGrid[row][col] = obstacles;
        queue.push([row - 1, col]);
        queue.push([row + 1, col]);
        queue.push([row, col - 1]);
        queue.push([row, col + 1]);
      } else {
        minGrid[row][col] = obstacles + 1;
        nextQueue.add(`${row - 1},${col}`);
        nextQueue.add(`${row + 1},${col}`);
        nextQueue.add(`${row},${col - 1}`);
        nextQueue.add(`${row},${col + 1}`);
      }
    }
    nextQueue = [...nextQueue].map((str) =>
      str.split(",").map((num) => parseInt(num))
    );
    queue = nextQueue;
    obstacles++;
  }

  return minGrid[0][0];
};

console.log(
  minimumObstacles([
    [0, 1, 1],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
