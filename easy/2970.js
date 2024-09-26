/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  function isStrictlyIncreasing(arr) {
    for (let i = 1; i < arr.length; i++) if (arr[i] <= arr[i - 1]) return false;
    return true;
  }

  function getArrayAfterRemoval(arr, start, end) {
    return [...arr.slice(0, start), ...arr.slice(end)];
  }

  let ans = 0;
  for (let start = 0; start < nums.length; start++)
    for (let end = start + 1; end <= nums.length; end++)
      if (isStrictlyIncreasing(getArrayAfterRemoval(nums, start, end))) ans++;

  return ans;
};

console.log(incremovableSubarrayCount([1, 2, 3, 4]));
