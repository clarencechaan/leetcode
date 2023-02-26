/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  let averages = new Set();
  nums.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i < nums.length / 2; i++)
    averages.add((nums[i] + nums[nums.length - 1 - i]) / 2);
  return averages.size;
};

console.log(distinctAverages([1, 100]));
