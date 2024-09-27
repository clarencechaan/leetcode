/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  return (nums.reduce((xor, num) => xor ^ num, 0) ^ k)
    .toString(2)
    .replaceAll("0", "").length;
};

console.log(minOperations((nums = [2, 1, 3, 4]), (k = 1)));
