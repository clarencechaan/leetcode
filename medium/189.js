/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  let arr = [...nums];
  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = arr[i];
  }
};

let nums = [-1, -100, 3, 99];
rotate(nums, 2);
console.log(nums);
