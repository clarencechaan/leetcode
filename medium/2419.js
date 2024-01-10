/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let max = 0;
  for (const num of nums) max = Math.max(max, num);

  let output = 1;
  for (let left = 0; left < nums.length; left++)
    if (nums[left] === max) {
      let right = left + 1;
      while (nums[right] === nums[left]) right++;
      output = Math.max(output, right - left);
      left = right;
    }

  return output;
};

console.log(longestSubarray([1, 2, 3, 3, 2, 2]));
