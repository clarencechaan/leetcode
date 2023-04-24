/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function (nums, k) {
  nums.sort((a, b) => (a > b ? 1 : -1));
  let minDiff = nums[nums.length - 1] - nums[0];

  for (let i = 0; i < nums.length - 1; i++) {
    let min = Math.min(nums[0] + k, nums[i + 1] - k);
    let max = Math.max(nums[nums.length - 1] - k, nums[i] + k);
    minDiff = Math.min(minDiff, max - min);
  }

  return minDiff;
};

console.log(smallestRangeII([1, 3, 6], 3));
