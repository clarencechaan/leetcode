/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const max = Math.max(...nums);

  // indices == the array of indices where `max` is located
  const indices = [];
  for (let i = 0; i < nums.length; i++) if (nums[i] === max) indices.push(i);

  let cursor = 0;
  let result = 0;

  for (let startIdx = 0; startIdx < nums.length; startIdx++) {
    while (indices[cursor] < startIdx) cursor++;
    const minEndIdx = indices[cursor + k - 1];
    if (minEndIdx === undefined) break;
    result += nums.length - minEndIdx;
  }

  return result;
};
