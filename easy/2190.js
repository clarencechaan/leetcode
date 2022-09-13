/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  let occurences = {};

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      occurences[nums[i + 1]] = occurences[nums[i + 1]]
        ? occurences[nums[i + 1]] + 1
        : 1;
    }
  }

  let target = null;
  let max = 0;
  for (const key in occurences) {
    if (occurences[key] > max) {
      target = key;
      max = occurences[key];
    }
  }

  return target;
};

console.log(mostFrequent([2, 2, 2, 2, 3], 2));
