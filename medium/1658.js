/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const n = nums.length;
  let sumLeft = [0];
  let sumRight = [];
  sumRight[n] = 0;
  for (let i = 0; i < n; i++) {
    sumLeft[i + 1] = sumLeft[i] + nums[i];
    sumRight[n - i - 1] = sumRight[n - i] + nums[n - i - 1];
  }

  let result = Infinity;
  for (let left = 0; left <= n; left++) {
    let min = 0;
    let max = n - left;
    let right = Math.floor((min + max) / 2);
    let sum = sumLeft[left] + sumRight[n - right];
    while (min < max) {
      if (sum < x) min = right + 1;
      else if (sum > x) max = right - 1;
      else break;
      right = Math.floor((min + max) / 2);
      sum = sumLeft[left] + sumRight[n - right];
    }
    if (sum === x) result = Math.min(result, left + right);
  }

  return result === Infinity ? -1 : result;
};

console.log(minOperations([1, 1, 4, 2, 3], 5));
