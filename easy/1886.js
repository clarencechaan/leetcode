/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  const n = mat.length;

  function rotate(mat) {
    let rotated = [];
    for (let i = 0; i < n; i++) rotated.push([]);

    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) rotated[j][n - 1 - i] = mat[i][j];
    return rotated;
  }

  function isEqual(mat1, mat2) {
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) if (mat1[i][j] !== mat2[i][j]) return false;
    return true;
  }

  if (isEqual(target, mat)) return true;
  const rotated1 = rotate(mat);
  if (isEqual(target, rotated1)) return true;
  const rotated2 = rotate(rotated1);
  if (isEqual(target, rotated2)) return true;
  const rotated3 = rotate(rotated2);
  if (isEqual(target, rotated3)) return true;

  return false;
};

console.log(
  findRotation(
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ]
  )
);
