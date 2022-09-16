/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let longest = 1;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) count++;
    else count = 1;

    if (count > longest) longest = count;
  }

  return longest;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
