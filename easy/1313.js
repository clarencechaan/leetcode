/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i += 2)
    result.push(...Array(nums[i]).fill(nums[i + 1]));

  return result;
};

console.log(decompressRLElist([1, 1, 2, 3]));
