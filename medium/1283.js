/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let divisor = Math.floor(nums.reduce((sum, val) => sum + val) / threshold);

  let sum = 0;
  let max = -Infinity;
  for (const num of nums) {
    sum += num;
    max = Math.max(max, num);
  }
  divisor = Math.floor(sum / threshold);
  let min = 1;
  let mid = Math.floor((min + max) / 2);

  function isValid(divisor) {
    return (
      nums.reduce((sum, val) => sum + Math.ceil(val / divisor), 0) <= threshold
    );
  }

  while (min < max) {
    if (isValid(mid)) max = mid;
    else min = mid + 1;
    mid = Math.floor((min + max) / 2);
  }

  return mid;
};

console.log(smallestDivisor([1, 2, 5, 9], 6));
