/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  let sorted = nums.sort((a, b) => (a > b ? 1 : -1));

  let count = 0;

  for (let i = 0; i < sorted.length && sorted[i] < 0 && count < k; i++) {
    sorted[i] = -sorted[i];
    count++;
  }

  if ((k - count) % 2 === 1 && count < k) {
    sorted = sorted.sort((a, b) => (a > b ? 1 : -1));
    sorted[0] = -sorted[0];
  }

  return sorted.reduce((sum, num) => sum + num, 0);
};

console.log(largestSumAfterKNegations([4, 2, 3], 1));
