/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++)
    if (nums[i] !== i) {
      let idx = nums[i];
      nums[i] = undefined;
      while (idx >= 0 && nums[idx] !== idx) [nums[idx], idx] = [idx, nums[idx]];
    }

  for (let i = 1; i <= nums.length; i++) if (!nums[i]) return i;
};

console.log(firstMissingPositive([1, 2, 0]));
