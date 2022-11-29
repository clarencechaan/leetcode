/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let done;

  while (!done) {
    done = true;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === 0 && nums[i + 1] !== 0) {
        nums[i] = nums[i + 1];
        nums[i + 1] = 0;
        done = false;
      }
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
