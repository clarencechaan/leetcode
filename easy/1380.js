/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let minInRow = [];
  let maxInCol = [];

  for (let i = 0; i < matrix.length; i++) {
    let min = 0;
    for (let j = 1; j < matrix[0].length; j++)
      if (matrix[i][j] < matrix[i][min]) min = j;
    minInRow[i] = min;
  }

  for (let j = 0; j < matrix[0].length; j++) {
    let max = 0;
    for (let i = 1; i < matrix.length; i++)
      if (matrix[i][j] > matrix[max][j]) max = i;
    maxInCol[j] = max;
  }

  let result = [];
  for (let row = 0; row < minInRow.length; row++)
    if (row === maxInCol[minInRow[row]])
      result.push(matrix[row][minInRow[row]]);
  return result;
};

console.log(
  luckyNumbers([
    [7, 8],
    [1, 2],
  ])
);
