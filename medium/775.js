/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  let min = Infinity;
  for (let i = nums.length - 3; i >= 0; i--) {
    min = Math.min(min, nums[i + 2]);
    if (nums[i] > min) return false;
  }

  return true;
};

console.log(isIdealPermutation([2, 0, 1]));
