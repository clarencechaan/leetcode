/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function (nums, x) {
  let maxAt = [0, 0];
  let sum;
  for (let i = nums.length - 1; i >= 0; i--) {
    let parity = nums[i] % 2;
    sum = nums[i] + Math.max(maxAt[parity], maxAt[(parity + 1) % 2] - x);
    maxAt[parity] = Math.max(maxAt[parity], sum);
  }

  return sum;
};

console.log(maxScore([2, 3, 6, 1, 9, 2], 5));
