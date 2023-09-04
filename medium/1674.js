/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function (nums, limit) {
  const n = nums.length;

  let ltArr = Array(limit * 2 + 1).fill(0);
  let gtArr = Array(limit * 2 + 1).fill(0);
  for (let i = 0; i < n / 2; i++) {
    let small = Math.min(nums[i], nums[n - 1 - i]);
    let large = Math.max(nums[i], nums[n - 1 - i]);
    let sum = small + large;
    let lt1 = sum - 1;
    let lt2 = small;
    let gt1 = sum + 1;
    let gt2 = limit + large + 1;
    if (lt1 >= 2) ltArr[lt1]++;
    if (lt2 >= 2) ltArr[lt2]++;
    if (gt1 <= limit * 2) gtArr[gt1]++;
    if (gt2 <= limit * 2) gtArr[gt2]++;
  }

  for (let i = limit * 2; i >= 2; i--) ltArr[i] += ltArr[i + 1] || 0;
  for (let i = 2; i <= limit * 2; i++) gtArr[i] += gtArr[i - 1] || 0;

  let min = n;
  for (let i = 2; i <= limit * 2; i++) min = Math.min(min, ltArr[i] + gtArr[i]);
  return min;
};

console.log(minMoves([1, 2, 4, 3], 4));
