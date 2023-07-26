/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  let n = rowSum.length;
  let m = colSum.length;
  let result = [];
  for (let i = 0; i < n; i++) result.push(Array(m).fill(0));
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      if (!rowSum[i]) break;
      if (!colSum[j]) continue;
      if (rowSum[i] >= colSum[j]) {
        result[i][j] = colSum[j];
        rowSum[i] -= colSum[j];
        colSum[j] = 0;
      } else {
        result[i][j] = rowSum[i];
        colSum[j] -= rowSum[i];
        rowSum[i] = 0;
      }
    }

  return result;
};

console.log(restoreMatrix([5, 7, 10], [8, 6, 8]));
