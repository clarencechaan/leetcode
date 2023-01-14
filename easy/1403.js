/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => (a > b ? -1 : 1));
  let totalSum = nums.reduce((sum, num) => sum + num, 0);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > totalSum / 2) return nums.slice(0, i + 1);
  }
};

console.log(minSubsequence([4, 4, 7, 6, 7]));
