/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  const m = matrix[0].length;
  const n = matrix.length;

  function largestSquareAt(x, y) {
    for (let side = 0; ; side++)
      for (let i = 0; i < side; i++)
        for (let j = 0; j < side; j++)
          if (!matrix[y + i]?.[x + j]) return side - 1;
  }

  let result = 0;

  for (let y = 0; y < n; y++)
    for (let x = 0; x < m; x++)
      if (matrix[y][x]) result += largestSquareAt(x, y);

  return result;
};

console.log(
  countSquares([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
  ])
);
