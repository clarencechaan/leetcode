/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (nums.reduce((num, sum) => num + sum, 0) < target) return 0;

  let min = nums.length;
  for (let i = 1; i < nums.length; i++) nums[i] += nums[i - 1];

  for (let i = 0; i < nums.length; i++) {
    for (let j = Math.min(min - 1, i + 1); i - j >= -1; j--)
      if (nums[i] - (nums[i - j] || 0) >= target) min = j;
      else break;
  }

  return min;
};

console.log(minSubArrayLen(5, [2, 3, 1, 1, 1, 1, 1]));
