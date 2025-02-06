/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  const arr = this;
  if (rowsCount * colsCount !== arr.length) return [];

  const matrix = Array(rowsCount)
    .fill()
    .map(() => Array(colsCount));

  for (let column = 0; column < colsCount; column++)
    if (column % 2 === 0)
      for (let i = 0; i < rowsCount; i++)
        matrix[i][column] = arr[rowsCount * column + i];
    else
      for (let i = 0; i < rowsCount; i++)
        matrix[rowsCount - 1 - i][column] = arr[rowsCount * column + i];

  return matrix;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
