/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums[0] < nums[nums.length - 1] || nums.length === 1) return nums[0];

  function recurse(min = 0, max = nums.length - 1) {
    let mid = Math.floor((min + max) / 2);
    while (max - min > 1) {
      if (nums[min] === nums[mid] && nums[mid] === nums[max])
        return Math.min(recurse(mid, max), recurse(min, mid));
      if (nums[max] <= nums[min] && nums[min] <= nums[mid]) min = mid;
      else if (nums[mid] <= nums[max] && nums[max] <= nums[min]) max = mid;
      mid = Math.floor((min + max) / 2);
    }
    return nums[mid + 1];
  }

  return recurse();
};

console.log(findMin([1, 3, 5]));
