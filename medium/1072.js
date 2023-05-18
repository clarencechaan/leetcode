/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  const m = matrix[0].length;
  const n = matrix.length;

  let flipsToEqualizeRow = [];
  for (let i = 0; i < n; i++) {
    let indices = [[], []];
    for (let j = 0; j < m; j++) indices[matrix[i][j]].push(j);
    indices[0] = indices[0].toString();
    indices[1] = indices[1].toString();
    flipsToEqualizeRow[i] = indices;
  }

  let freqMap = {};
  let max = 0;
  for (const [flips1, flips2] of flipsToEqualizeRow) {
    freqMap[flips1] = (freqMap[flips1] || 0) + 1;
    freqMap[flips2] = (freqMap[flips2] || 0) + 1;
    max = Math.max(max, freqMap[flips1], freqMap[flips2]);
  }

  return max;
};

console.log(
  maxEqualRowsAfterFlips([
    [0, 1],
    [1, 1],
  ])
);
