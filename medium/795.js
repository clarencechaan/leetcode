/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  let result = 0;

  let streak = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] <= right) streak++;
    else {
      result += (streak * (streak + 1)) / 2;
      streak = 0;
    }
  }

  streak = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] < left) streak++;
    else {
      result -= (streak * (streak + 1)) / 2;
      streak = 0;
    }
  }

  return result;
};

console.log(numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8));
