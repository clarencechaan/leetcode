/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  let sums = new Set();

  for (let i = 0; i < nums.length - 1; i++) {
    if (sums.has(nums[i] + nums[i + 1])) return true;
    sums.add(nums[i] + nums[i + 1]);
  }

  return false;
};

console.log(findSubarrays([0, 0, 0]));
