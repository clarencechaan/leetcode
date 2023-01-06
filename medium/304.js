/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
  const m = matrix[0].length;
  const n = matrix.length;

  let runningTotal = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    runningTotal[i] = [];
    for (let j = 0; j < m; j++) {
      sum += matrix[i][j];
      runningTotal[i].push(sum);
    }
  }

  let offsetsRL = [];
  for (let i = 0; i < n; i++) {
    offsetsRL[i] = [];
    let sum = 0;
    for (let j = m - 1; j >= 0; j--) {
      sum += matrix[i][j];
      offsetsRL[i][j] = sum;
    }
  }

  for (let i = offsetsRL[0].length - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = 0; j < offsetsRL.length; j++) {
      sum += offsetsRL[j][i];
      offsetsRL[j][i] = sum;
    }
  }

  let offsetsLR = [];
  for (let i = 0; i < n; i++) {
    offsetsLR[i] = [];
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += matrix[i][j];
      offsetsLR[i][j] = sum;
    }
  }

  for (let i = offsetsLR[0].length - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = 0; j < offsetsLR.length; j++) {
      sum += offsetsLR[j][i];
      offsetsLR[j][i] = sum;
    }
  }

  this.runningTotal = runningTotal;
  this.offsetsLR = offsetsLR;
  this.offsetsRL = offsetsRL;
  this.m = m;
  this.n = n;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let total =
    this.runningTotal[row2][this.m - 1] -
    (this.runningTotal[row1 - 1]?.[this.m - 1] || 0);

  let leftOffset =
    (this.offsetsLR[row2][col1 - 1] || 0) -
    (this.offsetsLR[row1 - 1]?.[col1 - 1] || 0);

  let rightOffset =
    (this.offsetsRL[row2][col2 + 1] || 0) -
    (this.offsetsRL[row1 - 1]?.[col2 + 1] || 0);

  return total - leftOffset - rightOffset;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

let nm = new NumMatrix([[-4, -5]]);

console.log(nm.sumRegion(0, 0, 0, 0));
