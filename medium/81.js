/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let pivotIdx = 0;
  for (let i = 1; i < nums.length; i++) if (nums[i - 1] > nums[i]) pivotIdx = i;
  nums = [...nums.slice(pivotIdx), ...nums.slice(0, pivotIdx)];

  let min = 0;
  let max = nums.length - 1;
  let mid = Math.round((min + max) / 2);

  while (max > min && nums[mid] !== target) {
    if (nums[mid] > target) max = mid - 1;
    else if (nums[mid] < target) min = mid + 1;
    mid = Math.round((min + max) / 2);
  }

  return nums[mid] === target;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
