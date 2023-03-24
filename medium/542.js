/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat[0].length;
  const n = mat.length;

  let count = 0;
  let coords = { 0: [] };
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (mat[i][j] === 0) {
        coords[0].push([i, j]);
        count++;
      } else mat[i][j] = null;

  for (let distance = 1; count < m * n; distance++) {
    coords[distance] = [];
    for (const [r, c] of coords[distance - 1]) {
      if (mat[r - 1]?.[c] === null) {
        mat[r - 1][c] = distance;
        coords[distance].push([r - 1, c]);
        count++;
      }
      if (mat[r + 1]?.[c] === null) {
        mat[r + 1][c] = distance;
        coords[distance].push([r + 1, c]);
        count++;
      }
      if (mat[r][c - 1] === null) {
        mat[r][c - 1] = distance;
        coords[distance].push([r, c - 1]);
        count++;
      }
      if (mat[r][c + 1] === null) {
        mat[r][c + 1] = distance;
        coords[distance].push([r, c + 1]);
        count++;
      }
    }
  }

  return mat;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
