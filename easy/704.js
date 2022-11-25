/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let mid = Math.round((min + max) / 2);

  while (true) {
    if (nums[mid] === target) return mid;
    else if (mid === min || max === min) return -1;
    else if (nums[mid] < target) min = mid + 1;
    else if (nums[mid] > target) max = mid - 1;
    mid = Math.round((min + max) / 2);
  }
};

console.log(search([-1, 0, 3, 5, 9, 12], 13));
