/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
  let missing = 1; // the smallest sum in [0,n] that is missing
  let result = 0;
  let idx = 0;

  while (missing <= n) {
    if (nums[idx] <= missing) {
      missing += nums[idx];
      idx++;
    } else {
      missing *= 2;
      result++;
    }
  }

  return result;
};

console.log(minPatches([1, 3], 6));
