/**
 * @param {number[][]} grid
 * @return {number}
 */
// 1) start from top right corner
// 2) count number of negative numbers for each row, starting from the end
var countNegatives = function (grid) {
  let count = 0;

  for (const row of grid) {
    for (let i = row.length - 1; i >= 0 && row[i] < 0; i--) {
      count++;
    }
  }

  return count;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
