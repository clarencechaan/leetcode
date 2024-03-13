/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
  // find p pairs of indices, where the max diff is minimized
  // idea:
  // 1. create helper function isValid(diff) that returns true if it possible to pick p pairs where the max difference <= diff
  // 2. binary search for the smallest value of diff where isValid(diff) returns true
  // time complexity O(n * log n)

  nums.sort((a, b) => (a > b ? 1 : -1));

  function isValid(diff) {
    let remaining = p;
    for (let i = 0; i < nums.length - 1 && remaining > 0; i++) {
      if (nums[i + 1] - nums[i] <= diff) {
        remaining--;
        i++;
      }
    }
    return remaining <= 0;
  }

  let min = 0;
  let max = nums[nums.length - 1] - nums[0];
  let mid = Math.floor((min + max) / 2);
  while (min < max) {
    if (isValid(mid)) max = mid;
    else min = mid + 1;
    mid = Math.floor((min + max) / 2);
  }

  return mid;
};

console.log(minimizeMax([10, 1, 2, 7, 1, 3], 2));
