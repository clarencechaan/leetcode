/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumOr = function (nums, k) {
  nums = nums.map((num) => BigInt(num));
  let orMapLeft = [];
  let orMapRight = [];

  let or = 0n;
  for (let i = 0; i < nums.length; i++) {
    or = or | nums[i];
    orMapLeft[i] = or;
  }

  or = 0n;
  for (let i = nums.length - 1; i >= 0; i--) {
    or = or | nums[i];
    orMapRight[i] = or;
  }

  let max = 0n;
  for (let i = 0; i < nums.length; i++) {
    let or =
      (orMapLeft[i - 1] || 0n) |
      (nums[i] * 2n ** BigInt(k)) |
      (orMapRight[i + 1] || 0n);
    if (or > max) max = or;
  }

  return Number(max);
};

console.log(maximumOr([12, 9], 1));
