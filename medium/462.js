/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => (a > b ? 1 : -1));
  let median = nums[Math.floor(nums.length / 2)];

  let result = 0;
  for (const num of nums) result += Math.abs(num - median);
  return result;
};

console.log(minMoves2([1, 2, 3]));
