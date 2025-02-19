/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  function bitwiseOR(left, right) {
    let bor = nums[left];
    for (let i = left + 1; i < right; i++) bor = bor | nums[i];
    return bor;
  }

  for (let length = 1; length <= nums.length; length++) {
    for (let left = 0; left + length <= nums.length; left++) {
      const right = left + length;
      const bor = bitwiseOR(left, right);
      if (bor >= k) return length;
    }
  }

  return -1;
};
