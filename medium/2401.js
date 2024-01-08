/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  function isNice(left, right) {
    for (let i = left; i <= right; i++)
      for (let j = i + 1; j <= right; j++)
        if ((nums[i] & nums[j]) !== 0) return false;
    return true;
  }

  let left = 0;
  let right;
  for (right = 1; right < nums.length; right++)
    if (!isNice(left, right)) left++;

  return right - left;
};

console.log(longestNiceSubarray([1, 3, 8, 48, 10]));
