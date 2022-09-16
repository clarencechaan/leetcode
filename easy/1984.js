/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  const sorted = nums.sort((a, b) => (a > b ? 1 : -1));
  let diffs = [];
  if (k === 1) diffs = [0];
  else
    for (let i = 0; i < sorted.length - 1; i++) {
      diffs.push(sorted[i + 1] - sorted[i]);
    }

  let min = null;
  for (let i = 0; i < diffs.length - k + 2; i++) {
    let sum = 0;
    for (let j = i; j < i + k - 1; j++) {
      sum += diffs[j];
    }
    if (min === null || sum < min) min = sum;
  }
  return min;
};

console.log(minimumDifference([9, 4, 1, 7], 2));
