/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
  const m = mat[0].length;
  const n = mat.length;
  const maxSide = Math.min(m, n);

  function sumSquareAt(x, y, side) {
    let sum = 0;
    for (let j = 0; j < side; j++)
      for (let k = 0; k < side; k++) {
        sum += mat[y + j][x + k];
        if (sum > threshold) return Infinity;
      }
    return sum;
  }

  for (let side = maxSide; side > 0; side--)
    for (let i = 0; i <= n - side; i++)
      for (let j = 0; j <= m - side; j++)
        if (sumSquareAt(j, i, side) <= threshold) return side;

  return 0;
};

console.log(
  maxSideLength(
    [
      [1, 1, 3, 2, 4, 3, 2],
      [1, 1, 3, 2, 4, 3, 2],
      [1, 1, 3, 2, 4, 3, 2],
    ],
    4
  )
);
