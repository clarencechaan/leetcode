/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  const m = mat[0].length;
  const n = mat.length;

  function submatsAt(x, y) {
    if (!mat[y][x]) return 0;
    let submatCount = 1;
    let width = 1;
    while (mat[y][x + width]) {
      width++;
      submatCount++;
    }
    let height = 1;
    while (mat[y + height]?.[x]) {
      let prevWidth = width;
      width = 1;
      submatCount++;
      while (width < prevWidth && mat[y + height]?.[x + width]) {
        width++;
        submatCount++;
      }
      height++;
    }
    return submatCount;
  }

  let result = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) result += submatsAt(j, i);

  return result;
};

console.log(
  numSubmat([
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
