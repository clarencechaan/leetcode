/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  for (const row of grid) row.sort((a, b) => (a > b ? -1 : 1));

  let result = 0;
  for (let i = 0; i < grid[0].length; i++) {
    let max = 0;
    for (const row of grid) max = Math.max(row[i], max);
    result += max;
  }
  return result;
};

console.log(deleteGreatestValue([[10]]));
