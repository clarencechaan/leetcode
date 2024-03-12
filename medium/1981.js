/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function (mat, target) {
  // idea: for each row, create a set of all possible sums from row 0 to current row
  //    => pick the sum closest to target in final row

  let sums = [new Set(mat[0])];
  for (let i = 1; i < mat.length; i++) {
    const prev = sums[i - 1];
    const set = new Set();
    for (const sum of prev) for (const num of mat[i]) set.add(sum + num);
    sums.push(set);
  }

  let minDiff = Infinity;
  for (const sum of sums[sums.length - 1])
    minDiff = Math.min(minDiff, Math.abs(sum - target));
  return minDiff;
};

console.log(
  minimizeTheDifference(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    13
  )
);
