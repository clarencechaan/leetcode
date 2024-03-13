/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
  // idea:
  // 1. sort nums in descending order
  // 2. return nums[k-1]

  nums = nums.map((num) => BigInt(num));
  nums.sort((a, b) => (a > b ? -1 : 1));
  return nums[k - 1].toString();
};

console.log(kthLargestNumber(["3", "6", "7", "10"], 4));
