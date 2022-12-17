/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  for (let y = 0; y < Math.floor(n / 2); y++) {
    for (let x = 0; x < Math.ceil(n / 2); x++) {
      [
        matrix[x][n - 1 - y],
        matrix[n - 1 - y][n - 1 - x],
        matrix[n - 1 - x][y],
        matrix[y][x],
      ] = [
        matrix[y][x],
        matrix[x][n - 1 - y],
        matrix[n - 1 - y][n - 1 - x],
        matrix[n - 1 - x][y],
      ];
    }
  }
};

let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

rotate(matrix);

console.log(matrix);

// 3x3
// [0][0], [0][2], [2][2], [2][0]
// [1][0], [0][1], [1][2], [2][1]

// 4x4
// [0][0], [0][3], [3][3], [3][0]
// [0][1], [1][3], [3][2], [2][0]
// [1][0], [0][2], [2][3], [3][1]
// [1][1], [1][2], [2][2], [2][1]
