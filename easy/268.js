/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sorted = nums.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i <= sorted.length; i++) if (sorted[i] !== i) return i;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
