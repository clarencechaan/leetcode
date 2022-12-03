/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) count++;
    else count = 0;
    if (count > max) max = count;
  }

  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
