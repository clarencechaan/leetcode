/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (r * c !== mat.length * mat[0].length) return mat;

  let elems = [];
  for (let i = 0; i < mat.length; i++)
    for (let j = 0; j < mat[i].length; j++) elems.push(mat[i][j]);
  elems.reverse();

  let result = [];
  for (let i = 0; i < r; i++) {
    result[i] = [];
    for (let j = 0; j < c; j++) result[i][j] = elems.pop();
  }
  return result;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    4,
    1
  )
);
