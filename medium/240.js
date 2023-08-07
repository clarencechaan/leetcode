/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix[0].length;
  const n = matrix.length;

  let minX = 0;
  let minY = 0;
  let maxX = m - 1;
  let maxY = n - 1;
  let done = false;

  while (!done) {
    done = true;

    for (let i = minY; i <= maxY; i++)
      if (maxY !== i - 1 && (i === n || matrix[i][minX] > target)) {
        maxY = i - 1;
        done = false;
        break;
      }

    for (let i = minX; i <= maxX; i++)
      if ((maxX !== i - 1 && i === m) || matrix[minY][i] > target) {
        maxX = i - 1;
        done = false;
        break;
      }

    for (let i = maxY; i >= minY; i--)
      if ((minY !== i + 1 && i === -1) || matrix[i][maxX] < target) {
        minY = i + 1;
        done = false;
        break;
      }

    for (let i = maxX; i >= minX; i--)
      if ((minX !== i + 1 && i === -1) || matrix[maxY][i] < target) {
        minX = i + 1;
        done = false;
        break;
      }
  }

  return (
    matrix[minY]?.[minX] === target ||
    matrix[maxY]?.[minX] === target ||
    matrix[minY]?.[maxX] === target ||
    matrix[maxY]?.[maxX] === target
  );
};
