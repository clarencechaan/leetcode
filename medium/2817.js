/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function (nums, x) {
  function insertIntoSortedArr(num, arr) {
    let min = 0;
    let max = arr.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (num < arr[mid]) max = mid;
      else if (num >= arr[mid]) min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    arr.splice(mid, 0, num);
  }

  function getClosestNumInSortedArr(num, arr) {
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.floor((min + max) / 2);
    while (min + 1 < max) {
      if (num < arr[mid]) max = mid;
      else if (num >= arr[mid]) min = mid;
      mid = Math.floor((min + max) / 2);
    }

    return Math.abs(arr[min] - num) < Math.abs(arr[max] - num)
      ? arr[min]
      : arr[max];
  }

  let result = Infinity;

  let left = [];
  for (let i = x; i < nums.length; i++) {
    insertIntoSortedArr(nums[i - x], left);
    result = Math.min(
      result,
      Math.abs(getClosestNumInSortedArr(nums[i], left) - nums[i])
    );
  }

  let right = [];
  for (let i = nums.length - 1 - x; i >= 0; i--) {
    insertIntoSortedArr(nums[i + x], right);
    result = Math.min(
      result,
      Math.abs(getClosestNumInSortedArr(nums[i], right) - nums[i])
    );
  }

  return result;
};

console.log(minAbsoluteDifference([4, 3, 2, 4], 2));
