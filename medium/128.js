/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums.sort((a, b) => (a > b ? 1 : -1));

  let longest = nums.length ? 1 : 0;
  let curr = longest;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] === 1) curr++;
    else if (nums[i + 1] === nums[i]) continue;
    else curr = 1;
    longest = Math.max(curr, longest);
  }

  return longest;
};

console.log(longestConsecutive([1, 2, 0, 1]));
