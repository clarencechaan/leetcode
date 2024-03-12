/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  // idea:
  // 1. create onesRow, onesCol, zerosRow, zerosCol
  // 2. create diff using the above arrays

  const onesRow = Array(n).fill(0);
  const onesCol = Array(m).fill(0);
  const zerosRow = Array(n).fill(0);
  const zerosCol = Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        onesRow[i]++;
        onesCol[j]++;
      } else if (grid[i][j] === 0) {
        zerosRow[i]++;
        zerosCol[j]++;
      }
    }
  }

  let diff = [];
  for (let i = 0; i < n; i++) diff.push([]);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
    }
  }

  return diff;
};

console.log(
  onesMinusZeros([
    [0, 1, 1],
    [1, 0, 1],
    [0, 0, 1],
  ])
);
