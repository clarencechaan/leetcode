/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
  let sum = nums.pop();
  let max = sum;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (sum >= nums[i]) sum += nums[i];
    else sum = nums[i];
    max = Math.max(max, sum);
  }

  return max;
};

console.log(maxArrayValue([2, 3, 7, 9, 3]));
