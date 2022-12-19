/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2])) {
      nums[idx] = nums[i];
      idx++;
    }
  }

  return idx;
};

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
console.log(nums);
