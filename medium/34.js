/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let mid = Math.round((min + max) / 2);

  while (nums[mid] !== target && max > min) {
    if (nums[mid] > target) max = mid - 1;
    else if (nums[mid] < target) min = mid + 1;
    mid = Math.round((min + max) / 2);
  }

  if (nums[mid] === target) {
    min = mid;
    max = mid;
    while (nums[min - 1] === target) min--;
    while (nums[max + 1] === target) max++;
    return [min, max];
  } else return [-1, -1];
};

console.log(searchRange([5, 7, 8, 8, 8, 8, 8, 10], 7));
