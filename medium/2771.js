/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxNonDecreasingLength = function (nums1, nums2) {
  const n = nums1.length;

  const memo = {};
  function recurse(idx = 0, prev) {
    if (idx === n) return 0;
    if (memo[idx + "," + prev] !== undefined) return memo[idx + "," + prev];
    const min = Math.min(nums1[idx], nums2[idx]);
    const max = Math.max(nums1[idx], nums2[idx]);
    let result;
    if (!prev || min >= prev) result = 1 + recurse(idx + 1, min);
    else if (!prev || max >= prev) result = 1 + recurse(idx + 1, max);
    else result = 0;
    memo[idx + "," + prev] = result;
    return result;
  }

  let result = 0;
  for (let i = 0; i < n; i++) result = Math.max(result, recurse(i));
  return result;
};

console.log(maxNonDecreasingLength([2, 3, 1], [1, 2, 1]));
