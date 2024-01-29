/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  nums.sort((a, b) => (a > b ? 1 : -1));

  function recurse(map = {}, idx = 0, size = 0) {
    if (idx >= nums.length) return size ? 1 : 0;
    let result = 0;
    if (!map[nums[idx] - k]) {
      map[nums[idx]] = (map[nums[idx]] || 0) + 1;
      result += recurse(map, idx + 1, size + 1);
      map[nums[idx]]--;
    }
    result += recurse(map, idx + 1, size);
    return result;
  }

  return recurse();
};

console.log(beautifulSubsets([2, 4, 6], 2));
