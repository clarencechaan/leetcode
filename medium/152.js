/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let seen = {};

  if (nums.filter((num) => num === 1).length > 1) {
    nums = nums.filter((num) => num !== 1);
    nums.push(1);
  }

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === -1 && nums[i + 1] === -1 && nums[i + 2] === -1) {
      nums = [...nums.slice(0, i + 1), ...nums.slice(i + 3)];
      i--;
    }
  }

  for (let start = 0; start < nums.length; start++) {
    for (let end = start; end < nums.length; end++) {
      if (start === end) seen[start + ":" + end] = nums[start];
      else seen[start + ":" + end] = seen[start + ":" + (end - 1)] * nums[end];
    }
  }

  let max = nums[0];
  for (const range in seen) max = Math.max(seen[range], max);
  return max;
};

console.log(maxProduct([2, 3, -2, 4]));
