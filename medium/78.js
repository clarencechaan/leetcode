/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];

  (function recurse(curr = [], pos = 0) {
    result.push(curr);
    if (pos === nums.length) return;
    for (let i = pos; i < nums.length; i++) recurse([...curr, nums[i]], i + 1);
  })();

  return result;
};

console.log(subsets([1, 2, 3]));
