/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let min = 0;
  let max = nums.length - 1;
  let mid = Math.floor((min + max) / 2);
  if (mid % 2 === 1) mid--;

  while (min < max) {
    if (nums[mid] === nums[mid + 1]) min = mid + 2;
    else if (nums[mid] !== nums[mid + 1] && nums[mid] === nums[mid - 1])
      max = mid - 2;
    else if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) break;
    mid = Math.floor((min + max) / 2);
    if (mid % 2 === 1) mid--;
  }

  return nums[mid];
};

console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
