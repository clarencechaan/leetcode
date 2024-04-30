/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function (nums1, nums2) {
  function recursiveMaxDotProduct(
    idx1 = 0,
    idx2 = 0,
    dp = Array(nums1.length)
      .fill()
      .map(() => [])
  ) {
    if (idx1 >= nums1.length || idx2 >= nums2.length) return 0;
    if (dp[idx1][idx2] !== undefined) return dp[idx1][idx2];
    const take =
      nums1[idx1] * nums2[idx2] +
      recursiveMaxDotProduct(idx1 + 1, idx2 + 1, dp);
    const skip1 = recursiveMaxDotProduct(idx1 + 1, idx2, dp);
    const skip2 = recursiveMaxDotProduct(idx1, idx2 + 1, dp);

    const result = Math.max(take, skip1, skip2);
    dp[idx1][idx2] = result;

    return result;
  }

  const min1 = Math.min(...nums1);
  const max1 = Math.max(...nums1);
  const min2 = Math.min(...nums2);
  const max2 = Math.max(...nums2);

  // answer is negative
  if (max1 < 0 && min2 > 0) return max1 * min2;
  if (max2 < 0 && min1 > 0) return max2 * min1;

  return recursiveMaxDotProduct();
};

console.log(maxDotProduct([2, 1, -2, 5], [3, 0, -6]));
