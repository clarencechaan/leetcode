/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const y = nums[j];
      const isStrong = Math.abs(x - y) <= Math.min(x, y);
      if (isStrong) max = Math.max(max, x ^ y);
    }
  }

  return max;
};

console.log(maximumStrongPairXor([1, 2, 3, 4, 5]));
