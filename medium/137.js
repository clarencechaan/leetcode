/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) i += 2;
    else return nums[i];
  }
};

console.log(singleNumber([0, 1, 0, 1, 0, 1, 99, 2, 2, 2]));
