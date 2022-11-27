/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let curr = 0;
  for (let i = 1; i < nums.length; i++) {
    let seen = false;
    for (let j = 0; j < i; j++) if (nums[i] === nums[j]) seen = true;
    if (!seen) {
      curr++;
      nums[curr] = nums[i];
    }
  }
  nums.splice(curr + 1);
};

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(arr);
console.log(arr);
