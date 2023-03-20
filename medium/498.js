/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const m = mat[0].length;
  const n = mat.length;

  let result = [];
  let dirTR = true;

  let row = 0;
  let col = 0;
  for (let i = 0; i < m * n; i++) {
    result.push(mat[row][col]);
    if (dirTR) {
      if (mat[row - 1]?.[col + 1] !== undefined) {
        row--;
        col++;
      } else {
        if (mat[row][col + 1] !== undefined) col++;
        else row++;
        dirTR = !dirTR;
      }
    } else {
      if (mat[row + 1]?.[col - 1] !== undefined) {
        row++;
        col--;
      } else {
        if (mat[row + 1]?.[col] !== undefined) row++;
        else col++;
        dirTR = !dirTR;
      }
    }
  }

  return result;
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
