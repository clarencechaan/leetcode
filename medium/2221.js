/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  // idea: just code the algorithm given
  while (nums.length > 1) {
    const n = nums.length;
    let newNums = [];
    for (let i = 0; i < n - 1; i++) {
      newNums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums = newNums;
  }
  return nums[0];
};

console.log(triangularSum([1, 2, 3, 4, 5]));
