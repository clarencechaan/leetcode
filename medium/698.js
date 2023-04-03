/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  let total = nums.reduce((sum, num) => sum + num, 0);
  if (total % k !== 0) return false;
  let size = total / k;

  let historySeen = new Set();

  function recurse(idx = 0, history = [], sum = 0, arrs = 0) {
    let str = history.sort().toString();
    if (historySeen.has(str)) return false;
    historySeen.add(str);

    if (arrs === k) return true;
    for (let i = idx; i < nums.length; i++) {
      if (history.some((h) => h === i)) continue;
      else if (sum + nums[i] <= (arrs + 1) * size) {
        let nextHistory = [...history, i];
        let nextSum = sum + nums[i];
        let nextArrs = nextSum % size === 0 ? arrs + 1 : arrs;
        let nextIdx = nextArrs > arrs ? 0 : i + 1;
        if (recurse(nextIdx, nextHistory, nextSum, nextArrs)) return true;
      }
    }
    return false;
  }

  return recurse();
};

console.log(canPartitionKSubsets([1, 1, 1, 1, 2, 2, 2, 2], 4));
