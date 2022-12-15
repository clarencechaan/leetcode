/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let seenRotated = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    else if (nums[i - 1] && nums[i - 1] > nums[i]) seenRotated = true;
    else if (seenRotated && nums[i] > target) break;
  }

  return -1;
};

console.log(search([1], 0));
