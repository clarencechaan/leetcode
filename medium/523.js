/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (nums.length < 2) return false;

  const set = new Set([0]);
  let sum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    sum = (sum + nums[i]) % k;
    if (set.has((sum + nums[i + 1]) % k)) return true;
    set.add(sum);
  }

  return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
