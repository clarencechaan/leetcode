/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let minY = 0;
  let maxY = m - 1;
  let midY = Math.round((minY + maxY) / 2);

  let minX = 0;
  let maxX = n - 1;
  let midX = Math.round((minX + maxX) / 2);

  while (
    maxY > minY &&
    !(matrix[midY][0] <= target && matrix[midY][n - 1] >= target)
  ) {
    if (matrix[midY][0] > target) maxY = midY - 1;
    else if (matrix[midY][n - 1] < target) minY = midY + 1;
    midY = Math.min(Math.max(Math.round((minY + maxY) / 2), 0), m - 1);
  }

  while (maxX > minX && matrix[midY][midX] !== target) {
    if (matrix[midY][midX] > target) maxX = midX - 1;
    else if (matrix[midY][midX] < target) minX = midX + 1;
    midX = Math.min(Math.max(Math.round((minX + maxX) / 2), 0), n - 1);
  }

  return matrix[midY][midX] === target;
};

console.log(searchMatrix([[1, 3]], 4));
