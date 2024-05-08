/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var tilingRectangle = function (n, m) {
  if (n > m) [n, m] = [m, n];

  // return the minimum number of squares you can fill `grid` with, starting
  // from side size of `side`, and working the way down to a side size of `1`
  function fillGrid(side, grid) {
    if (side <= 0) return 0;
    const queue = getSpiralQueue(n - side + 1, m - side + 1);
    let result = 0;
    for (const [x, y] of queue) {
      if (isFree(x, y, side, grid)) {
        result++;
        drawSquare(x, y, side, grid);
      }
    }
    result += fillGrid(side - 1, grid);
    return result;
  }

  function isFree(x, y, side, grid) {
    for (let i = y; i < y + side; i++) {
      for (let j = x; j < x + side; j++) {
        if (grid[i][j] === 1) return false;
      }
    }
    return true;
  }

  function drawSquare(x, y, side, grid) {
    for (let i = y; i < y + side; i++) {
      for (let j = x; j < x + side; j++) {
        grid[i][j] = 1;
      }
    }
  }

  function getSpiralQueue(height, width) {
    const queue = new Set(["0,0"]);
    let x = 0;
    let y = 0;
    let dir = 0;

    while (queue.size < height * width) {
      let nextX = x;
      let nextY = y;
      switch (dir) {
        case 0:
          nextX++;
          break;
        case 1:
          nextY++;
          break;
        case 2:
          nextX--;
          break;
        case 3:
          nextY--;
          break;
      }
      if (
        nextX >= width ||
        nextY >= height ||
        nextX < 0 ||
        nextY < 0 ||
        queue.has(nextX + "," + nextY)
      ) {
        dir = (dir + 1) % 4;
        continue;
      }
      queue.add(nextX + "," + nextY);
      x = nextX;
      y = nextY;
    }

    return [...queue].map((str) => str.split(",").map((num) => parseInt(num)));
  }

  let result = n * m;
  for (let side = Math.min(n, m); side > 1; side--) {
    const grid = Array(n)
      .fill()
      .map(() => Array(m).fill(0));
    result = Math.min(result, fillGrid(side, grid));
  }

  function recursion2(
    height = n,
    width = m,
    dp = Array(n + 1)
      .fill()
      .map(() => [])
  ) {
    if (!height || !width) return 0;
    if (height === width) return 1;

    if (dp[height][width] >= 0) return dp[height][width];

    let result = height * width;
    for (let side = Math.min(height, width); side > 1; side--) {
      result = Math.min(
        result,
        1 +
          recursion2(height, width - side, dp) +
          recursion2(height - side, width, dp),
        1 +
          recursion2(side, height - side, dp) +
          recursion2(height, width - side, dp)
      );
    }

    dp[height][width] = result;

    return result;
  }

  result = Math.min(result, recursion2());

  return result;
};

console.log(tilingRectangle(11, 13));
