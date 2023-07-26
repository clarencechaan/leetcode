/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function (grid) {
  if (grid[0][0] === 0) return 0;

  const m = grid[0].length;
  const n = grid.length;

  let neg = [];
  for (let i = 0; i < n; i++) neg.push([]);
  if (grid[0][0] < 0) neg[0][0] = grid[0][0];

  let pos = [];
  for (let i = 0; i < n; i++) pos.push([]);
  if (grid[0][0] > 0) pos[0][0] = grid[0][0];

  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < m; j++) {
        if (neg[i][j] !== undefined || pos[i][j] !== undefined) continue;
        done = false;
        let negFactor = Math.min(
          neg[i - 1]?.[j] !== undefined ? neg[i - 1][j] : Infinity,
          neg[i][j - 1] !== undefined ? neg[i][j - 1] : Infinity
        );
        let posFactor = Math.max(
          pos[i - 1]?.[j] !== undefined ? pos[i - 1][j] : -Infinity,
          pos[i][j - 1] !== undefined ? pos[i][j - 1] : -Infinity
        );
        if (grid[i][j] === 0) {
          neg[i][j] = 0;
          pos[i][j] = 0;
        } else if (grid[i][j] > 0) {
          if (negFactor !== Infinity) neg[i][j] = negFactor * grid[i][j];
          if (posFactor !== -Infinity) pos[i][j] = posFactor * grid[i][j];
        } else if (grid[i][j] < 0) {
          if (negFactor !== Infinity) pos[i][j] = negFactor * grid[i][j];
          if (posFactor !== -Infinity) neg[i][j] = posFactor * grid[i][j];
        }
      }
  }

  return pos[n - 1][m - 1] !== undefined
    ? pos[n - 1][m - 1] % (10 ** 9 + 7)
    : -1;
};

console.log(
  maxProductPath([
    [1, -2, 1],
    [1, -2, 1],
    [3, -4, 1],
  ])
);
