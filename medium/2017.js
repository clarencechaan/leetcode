/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  // idea:
  // 1. create a function getMaxPoints(grid) that returns the maximum number of points obtainable on grid
  // 2. create a function getGrid(turn) that returns the grid with a path of 0s from [0,0] to [0,turn] and [1,turn] to [1,n-1]
  // 3. run getMaxPointsGrid(grid) on each grid returned by getGrid(turn) where 0 <= turn <= n - 1
  // (too slow)

  // after the first robot goes:
  // grid example:
  // 0 0 0 0 0 x x x x x x
  // x x x x 0 0 0 0 0 0 0
  // grid example:
  // 0 0 0 0 0 0 0 0 0 0 0
  // x x x x x x x x x x 0
  // grid example:
  // 0 x x x x x x x x x x
  // 0 0 0 0 0 0 0 0 0 0 0
  // notice => the second robot always takes either the ending portion of row 0, or the starting portion of row 1
  // => need to figure out a way to quickly calculate how many points the second robot gets when the first robot makes a turn at an index

  // idea:
  // 1. create a matrix called sum where sum[0][i] === the number of points robot 2 gets going from [0,i] to [0,n-1]
  //                                 and sum[1][i] === the number of points robot 2 gets going from [1,0] to [1,i]
  // 2. go through each possible value of turn, where 0 <= turn <= n - 1,
  //    => the number of points robot 2 gets when robot 1 makes a specific turn === max(sum[0][turn+1], sum[1][turn-1])
  //    => find the value of turn where the number of points robot 2 gets is minimized

  const n = grid[0].length;
  const sum = [[], []];
  for (let i = n - 1; i >= 1; i--) {
    sum[0][i] = grid[0][i] + (sum[0][i + 1] || 0);
  }
  for (let i = 0; i < n - 1; i++) {
    sum[1][i] = (sum[1][i - 1] || 0) + grid[1][i];
  }

  let min = Infinity;
  for (let turn = 0; turn <= n - 1; turn++) {
    const robot2points = Math.max(sum[0][turn + 1] || 0, sum[1][turn - 1] || 0);
    min = Math.min(min, robot2points);
  }

  return min;
};

console.log(
  gridGame([
    [2, 5, 4],
    [1, 5, 1],
  ])
);
