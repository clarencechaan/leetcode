/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let idx0s = [-1];
  for (let i = 0; i < nums.length; i++) if (nums[i] === 0) idx0s.push(i);
  idx0s.push(nums.length);

  if (idx0s.length - 2 <= k) return nums.length;

  let max = 0;
  for (let i = 0; i + k + 1 < idx0s.length; i++)
    max = Math.max(max, idx0s[i + k + 1] - idx0s[i] - 1);

  return max;
};

console.log(
  longestOnes(
    (nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]),
    (k = 3)
  )
);
