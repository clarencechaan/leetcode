/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  for (const num of nums) {
    if (nums.includes(num + diff) && nums.includes(num + 2 * diff)) count++;
  }
  return count;
};

console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));
