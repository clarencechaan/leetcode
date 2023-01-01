/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  let max0 = nums.slice(0, nums.length - 1);
  let max1 = nums.slice(1);

  for (let i = 2; i < max0.length; i++)
    max0[i] += Math.max(max0[i - 3] || 0, max0[i - 2] || 0);

  for (let i = 2; i < max1.length; i++)
    max1[i] += Math.max(max1[i - 3] || 0, max1[i - 2] || 0);

  return Math.max(
    max0[max0.length - 1] || 0,
    max0[max0.length - 2] || 0,
    max1[max1.length - 1] || 0,
    max1[max1.length - 2] || 0
  );
};

console.log(rob([1, 2, 3]));
