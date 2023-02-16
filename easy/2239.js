/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let result = nums[0];
  for (const num of nums)
    if (
      Math.abs(num) < Math.abs(result) ||
      (Math.abs(num) === Math.abs(result) && num > result)
    )
      result = num;
  return result;
};

console.log(findClosestNumber([2, -1, 1]));
