/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let max = 0;
  let score = 0;
  let map = {};
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (map[nums[right]] !== undefined) {
      let nextLeft = map[nums[right]] + 1;
      for (; left < nextLeft; left++) {
        score -= nums[left];
        delete map[nums[left]];
      }
    }
    score += nums[right];
    map[nums[right]] = right;
    max = Math.max(max, score);
  }

  return max;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
