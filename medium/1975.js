/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  // it seems like we can make multiply any even number of cells by -1
  // =>
  // 1. keep all values in an array instead of a matrix, and sort in ascending order
  // 2. for every pair of adjacent values in the array, choose to flip or not to flip,
  //    depending on which is better, then add to our sum

  const arr = [];
  for (const row of matrix) for (const num of row) arr.push(num);
  arr.sort((a, b) => (a > b ? 1 : -1));

  let sum = 0;
  for (let i = 0; i < arr.length - 1; i += 2) {
    const notFlip = arr[i] + arr[i + 1];
    if (arr[i] < 0) {
      const flip = -arr[i] - arr[i + 1];
      sum += Math.max(flip, notFlip);
    } else sum += notFlip;
  }

  if (arr.length % 2 === 1) sum += arr[arr.length - 1];

  return sum;
};

console.log(
  maxMatrixSum([
    [1, -1],
    [-1, 1],
  ])
);
