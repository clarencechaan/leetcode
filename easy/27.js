/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[curr] = nums[i];
      curr++;
    }
  }
  nums.splice(curr);
};

let arr = [0, 1, 2, 2, 3, 0, 4, 2];
removeElement(arr, 2);
console.log(arr);
