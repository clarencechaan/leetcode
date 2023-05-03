/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length - 1; i++)
    for (let j = i + max; j < nums.length; j++)
      if (nums[i] <= nums[j]) max = j - i;

  return max;
};

console.log(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1]));
