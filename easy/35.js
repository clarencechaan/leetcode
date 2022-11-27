/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let mid = Math.round((min + max) / 2);

  while (true) {
    if (nums[mid] === target) return mid;
    else if ((min === mid && max === mid) || max < min) {
      if (nums[mid] < target) return mid + 1;
      else return mid;
    } else if (nums[mid] < target) {
      min = mid + 1;
      mid = Math.round((min + max) / 2);
    } else {
      max = mid - 1;
      mid = Math.round((min + max) / 2);
    }
  }
};

console.log(searchInsert([1, 3], 4));
