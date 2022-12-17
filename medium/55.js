/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reachable = [true];
  for (let i = 0; i < reachable.length; i++)
    for (let j = 1; j <= nums[i]; j++) reachable[i + j] = true;
  return reachable.length >= nums.length;
};

console.log(canJump([3, 2, 1, 0, 4]));
