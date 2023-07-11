/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  let sums = [];

  for (let length = 1; length <= nums.length; length++) {
    let sum = 0;
    for (let i = 0; i < length; i++) sum += nums[i];
    for (let i = 0; i + length <= nums.length; i++) {
      sums.push(sum);
      sum -= nums[i];
      sum += nums[i + length];
    }
  }

  sums.sort((a, b) => (a > b ? 1 : -1));
  let result = sums
    .slice(left - 1, right)
    .reduce((sum, val) => sum + BigInt(val), 0n);
  result = Number(result % (10n ** 9n + 7n));
  return result;
};

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));
