/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  let startY = Math.max(0, mat.length - 2);
  let startX = 0;

  while (!(startY === 0 && startX === mat[0].length - 1)) {
    let arr = [];
    let i = startY;
    let j = startX;
    while (mat[i]?.[j] !== undefined) {
      arr.push(mat[i][j]);
      i++;
      j++;
    }
    arr.sort((a, b) => (a > b ? 1 : -1));
    i = startY;
    j = startX;
    for (const val of arr) {
      mat[i][j] = val;
      i++;
      j++;
    }

    if (startY > 0) startY--;
    else startX++;
  }

  return mat;
};

console.log(diagonalSort([[37, 98, 82, 45, 42]]));
