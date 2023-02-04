/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let minLR = [];
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    minLR[i] = min;
  }

  let maxRL = [];
  let max = nums[nums.length - 1];
  for (let i = nums.length - 1; i >= 0; i--) {
    max = Math.max(max, nums[i]);
    maxRL[i] = max;
  }

  let maxDiff = -1;
  for (let i = 0; i < nums.length; i++) {
    let diff = maxRL[i] - minLR[i];
    if (diff > maxDiff && diff > 0) maxDiff = diff;
  }

  return maxDiff;
};

console.log(maximumDifference([1, 5, 2, 10]));
