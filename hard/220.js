/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  for (let i = 0; i < nums.length; i++)
    for (let j = 1; j <= indexDiff && i + j < nums.length; j++)
      if (Math.abs(nums[i] - nums[i + j]) <= valueDiff) return true;
  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
