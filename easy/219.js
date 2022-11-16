/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let occurences = {};
  for (let i = 0; i < nums.length; i++) {
    if (!occurences[nums[i]]) occurences[nums[i]] = [];
    occurences[nums[i]].push(i);
  }
  for (const num in occurences) {
    for (let i = 0; i < occurences[num].length - 1; i++) {
      if (occurences[num][i + 1] - occurences[num][i] <= k) return true;
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
