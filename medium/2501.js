/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  nums = new Set(nums);

  function getSquareStreakSize(num) {
    let size = 1;
    while (nums.has(num ** 2)) {
      num = num ** 2;
      size++;
    }
    if (size === 1) return -1;
    return size;
  }

  let ans = -1;
  for (const num of nums) ans = Math.max(ans, getSquareStreakSize(num));
  return ans;
};

console.log(longestSquareStreak([4, 3, 6, 16, 8, 2]));
