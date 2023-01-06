/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let seen = [];
  function recurse(i, length = 1) {
    if (seen[i]) return seen[i] + length - 1;
    let max = 1;
    for (let j = i + 1; j < nums.length; j++)
      if (nums[j] > nums[i])
        max = Math.max(recurse(j, length + 1), max, length + 1);
    return max;
  }

  let result = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const depth = recurse(i);
    seen[i] = depth;
    result = Math.max(depth, result);
  }

  return result;
};

console.log(lengthOfLIS([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12]));
