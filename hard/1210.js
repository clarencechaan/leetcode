/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
  const n = grid.length;

  const memo = Array(n)
    .fill()
    .map(() =>
      Array(n)
        .fill()
        .map(() => ({}))
    );

  function recursion(x = 0, y = 0, orientation = "H", madeTurn = false) {
    if (x === n - 2 && y == n - 1 && orientation === "H") return 0;
    if (grid[y]?.[x] !== 0) return Infinity;
    if (orientation === "H" && grid[y][x + 1] !== 0) return Infinity;
    if (orientation === "V" && grid[y + 1]?.[x] !== 0) return Infinity;
    if (memo[x][y][orientation] >= 0) return memo[x][y][orientation];

    const right = 1 + recursion(x + 1, y, orientation);
    const down = 1 + recursion(x, y + 1, orientation);
    let turn = Infinity;
    if (
      !madeTurn &&
      orientation === "H" &&
      grid[y + 1]?.[x] === 0 &&
      grid[y + 1]?.[x + 1] === 0
    )
      turn = 1 + recursion(x, y, "V", true);
    else if (
      !madeTurn &&
      orientation === "V" &&
      grid[y][x + 1] === 0 &&
      grid[y + 1]?.[x + 1] === 0
    )
      turn = 1 + recursion(x, y, "H", true);

    const result = Math.min(right, down, turn);
    memo[x][y][orientation] = result;
    return result;
  }

  let ans = recursion();
  if (ans == Infinity) ans = -1;
  return ans;
};

console.log(
  minimumMoves([
    [0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
  ])
);
