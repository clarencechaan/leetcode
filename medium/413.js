/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let result = 0;
  let length = 2;

  for (let i = 0; i < nums.length - 2; i++)
    if (nums[i + 2] - nums[i + 1] === nums[i + 1] - nums[i]) length++;
    else if (length >= 3) {
      result += ((length - 2) * (length - 1)) / 2;
      length = 2;
    }
  if (length >= 3) result += ((length - 2) * (length - 1)) / 2;

  return result;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5, 8, 10, 12, 14]));
