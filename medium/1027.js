/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  let map = {};

  function recurse(idx = 0, diff) {
    if (map[idx + "," + diff] !== undefined) return map[idx + "," + diff];
    let max = 0;
    if (diff === undefined)
      for (let i = 0; i < nums.length; i++)
        for (let j = i + 1; j < nums.length; j++) {
          max = Math.max(max, 2 + recurse(j, nums[j] - nums[i]));
        }
    else {
      for (let i = idx + 1; i < nums.length; i++) {
        if (nums[i] - nums[idx] === diff)
          max = Math.max(max, 1 + recurse(i, diff));
      }
    }

    map[idx + "," + diff] = max;
    return max;
  }

  return recurse();
};

console.log(longestArithSeqLength([3, 6, 9, 12]));
