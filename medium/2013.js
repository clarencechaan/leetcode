var DetectSquares = function () {
  const grid = Array(1001)
    .fill()
    .map(() => Array(1001).fill(0));
  this.grid = grid;
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  const [x, y] = point;
  this.grid[y][x]++;
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  const [x, y] = point;
  const grid = this.grid;
  let sum = 0;

  // ++
  for (let i = 1; y + i <= 1000 && x + i <= 1000; i++)
    sum += grid[y + i][x + i] * grid[y][x + i] * grid[y + i][x];
  // +-
  for (let i = 1; y + i <= 1000 && x - i >= 0; i++)
    sum += grid[y + i][x - i] * grid[y][x - i] * grid[y + i][x];
  // -+
  for (let i = 1; y - i >= 0 && x + i <= 1000; i++)
    sum += grid[y - i][x + i] * grid[y][x + i] * grid[y - i][x];
  // --
  for (let i = 1; y - i >= 0 && x - i >= 0; i++)
    sum += grid[y - i][x - i] * grid[y][x - i] * grid[y - i][x];

  return sum;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
