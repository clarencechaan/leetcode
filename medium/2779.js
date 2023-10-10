/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => (a > b ? 1 : -1));

  function beauty(idx) {
    let min = idx;
    let max = nums.length - 1;
    let mid = Math.ceil((min + max) / 2);
    while (min < max) {
      if (nums[mid] <= nums[idx] + 2 * k) min = mid;
      else if (nums[mid] > nums[idx] + 2 * k) max = mid - 1;
      mid = Math.ceil((min + max) / 2);
    }
    return mid - idx + 1;
  }

  let max = 0;
  for (let i = 0; i < nums.length; i++) max = Math.max(max, beauty(i));

  return max;
};

console.log(maximumBeauty([4, 6, 1, 2], 2));
