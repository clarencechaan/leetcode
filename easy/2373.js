/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;
  let result = [];
  for (let i = 0; i < n - 2; i++) result.push([]);

  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      let max = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        for (let l = j - 1; l <= j + 1; l++) {
          max = Math.max(grid[k][l], max);
        }
      }
      result[i - 1][j - 1] = max;
    }
  }

  return result;
};

console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
