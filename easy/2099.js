/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  let result = nums.map((num, idx) => ({ num, idx }));
  result.sort((a, b) => (a.num > b.num ? -1 : 1));
  result = result.slice(0, k);

  result.sort((a, b) => (a.idx > b.idx ? 1 : -1));
  result = result.map((obj) => obj.num);

  return result;
};

console.log(maxSubsequence([2, 1, 3, 3], 2));
