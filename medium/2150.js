/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
  nums.sort((a, b) => (a > b ? 1 : -1));

  let result = [];
  for (let i = 0; i < nums.length; i++)
    if (
      (i === 0 || nums[i - 1] < nums[i] - 1) &&
      (i === nums.length - 1 || nums[i + 1] > nums[i] + 1)
    )
      result.push(nums[i]);

  return result;
};

console.log(findLonely([10, 6, 5, 8]));
