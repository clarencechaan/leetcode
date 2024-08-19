/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  return nums.reduce(
    (sum, num, idx) =>
      sum + (idx.toString(2).replaceAll("0", "").length === k ? num : 0),
    0
  );
};

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1));
