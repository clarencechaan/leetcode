/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  for (let i = 0; i < nums.length; i++)
    if (nums[i] === original) {
      original *= 2;
      i = -1;
    }

  return original;
};

console.log(findFinalValue([2, 7, 9], 4));
