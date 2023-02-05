/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums.sort((a, b) => (a > b ? 1 : -1));

  let result = [];
  for (let i = 0; i < nums.length; i++) if (nums[i] === target) result.push(i);
  return result;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
