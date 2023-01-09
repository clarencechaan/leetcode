/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  let result = [];
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++) result.push([i, j]);

  result.sort((a, b) =>
    Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter) >
    Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter)
      ? 1
      : -1
  );

  return result;
};

console.log(allCellsDistOrder(2, 3, 1, 2));
