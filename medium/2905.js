/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
  let minLR = [];
  let maxLR = [];
  for (
    let i = 0, min = nums[0], max = nums[0], minIdx = 0, maxIdx = 0;
    i < nums.length;
    i++
  ) {
    if (nums[i] < min) [min, minIdx] = [nums[i], i];
    if (nums[i] > max) [max, maxIdx] = [nums[i], i];
    minLR[i] = [min, minIdx];
    maxLR[i] = [max, maxIdx];
  }

  let minRL = [];
  let maxRL = [];
  for (
    let i = nums.length - 1,
      min = nums[nums.length - 1],
      max = nums[nums.length - 1],
      minIdx = nums.length - 1,
      maxIdx = nums.length - 1;
    i >= 0;
    i--
  ) {
    if (nums[i] < min) [min, minIdx] = [nums[i], i];
    if (nums[i] > max) [max, maxIdx] = [nums[i], i];
    minRL[i] = [min, minIdx];
    maxRL[i] = [max, maxIdx];
  }

  for (let i = 0; i + indexDifference < nums.length; i++)
    if (maxRL[i + indexDifference][0] - minLR[i][0] >= valueDifference)
      return [minLR[i][1], maxRL[i + indexDifference][1]];
    else if (maxLR[i][0] - minRL[i + indexDifference][0] >= valueDifference)
      return [maxLR[i][1], minRL[i + indexDifference][1]];

  return [-1, -1];
};

console.log(findIndices([5, 1, 4, 1], 2, 4));
