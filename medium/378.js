/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  let rowIndices = Array(n).fill(0);

  while (true) {
    let min = Infinity;
    let idx = -1;
    for (let i = 0; i < rowIndices.length; i++) {
      if (matrix[i][rowIndices[i]] < min) {
        min = matrix[i][rowIndices[i]];
        idx = i;
      }
    }

    if (k === 1) return matrix[idx][rowIndices[idx]];
    rowIndices[idx]++;
    k--;
  }
};

console.log(
  kthSmallest(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8
  )
);

// [0, 0, 0]
// [1, 0, 0]
// [2, 0, 0]
// [3, 0, 0]
// [3, 1, 0]
// [3, 2, 0]
// [3, 2, 1]
// [3, 3, 1]
// [3, 3, 2]
// [3, 3, 3]
