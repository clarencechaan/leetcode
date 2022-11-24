/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sorted = nums.sort((a, b) => (a > b ? -1 : 1));
  let sum = 0;
  for (let i = 1; i < sorted.length; i = i + 2) sum += nums[i];
  return sum;
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
