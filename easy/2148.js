/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  nums.sort((a, b) => (a > b ? 1 : -1));

  let min = nums[0];
  let max = nums[nums.length - 1];

  let result = 0;
  for (let i = 1; i < nums.length - 1; i++)
    if (nums[i] > min && nums[i] < max) result++;

  return result;
};

console.log(countElements([-3, 3, 3, 90]));
