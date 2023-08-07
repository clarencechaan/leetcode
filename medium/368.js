/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => (a > b ? 1 : -1));

  let result = [];
  let max = {};

  function buildSubset(idx = 0, subset = []) {
    if (subset.length <= max[subset[subset.length - 1]]) return;

    if (idx === 0) {
      for (let i = 0; i < nums.length; i++) buildSubset(i + 1, [nums[i]]);
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      if (nums[i] % subset[subset.length - 1] === 0)
        buildSubset(i + 1, [...subset, nums[i]]);
    }

    max[subset[subset.length - 1]] = subset.length;

    if (subset.length > result.length) result = subset;
  }

  buildSubset();

  return result;
};
