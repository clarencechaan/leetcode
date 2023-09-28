/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let max = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);
      result += max - min;
    }
  }
  return result;
};

console.log(subArrayRanges([1, 2, 3]));
