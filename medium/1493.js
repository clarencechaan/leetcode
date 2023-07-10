/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let idx0s = [-1];
  for (let i = 0; i < nums.length; i++) if (!nums[i]) idx0s.push(i);
  idx0s.push(nums.length);
  if (idx0s.length === 2) return nums.length - 1;

  let max = 0;
  for (let i = 2; i < idx0s.length; i++)
    max = Math.max(max, idx0s[i] - idx0s[i - 2] - 2);
  return max;
};

console.log(longestSubarray([1, 1, 0, 1]));
