/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function (nums, k) {
  // naive approach:
  // 1. keep performing operation until no longer possible
  // 2. return true if nums only consists of 0s; false otherwise
  // (passes but is slow at O(n*k) time complexity)

  // for (let i = nums.length - 1; i - k + 1 >= 0; i--) {
  //   if (nums[i] === 0) continue;
  //   if (nums[i] < 0) return false;
  //   for (let j = i - 1; j > i - k; j--) nums[j] -= nums[i];
  //   nums[i] = 0;
  // }
  // return nums.every((num) => num === 0);

  // optimized:
  // use `offset` to keep track how much of nums[i] has already been deleted
  let offset = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] -= offset;
    if (nums[i] < 0) return false;
    offset += nums[i] - (nums[i - k + 1] || 0);
  }

  return offset === 0;
};

console.log(checkArray([2, 2, 3, 1, 1, 0], 3));
