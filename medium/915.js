/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  let maxLR = [];
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    maxLR[i] = max;
  }

  let minRL = [];
  let min = Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    min = Math.min(min, nums[i]);
    minRL[i] = min;
  }

  for (let i = 0; i < nums.length; i++)
    if (maxLR[i] <= minRL[i + 1]) return i + 1;
};

console.log(partitionDisjoint([1, 1, 1, 0, 6, 12]));
