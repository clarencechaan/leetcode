/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let result = 0;
  let arr = [nums[0]];
  for (let i = 1; i < nums.length; i++)
    if (arr[arr.length - 1] !== nums[i]) arr.push(nums[i]);

  for (let i = 1; i < arr.length - 1; i++)
    if (
      (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
      (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])
    )
      result++;
  return result;
};

console.log(countHillValley([2, 4, 1, 1, 6, 5]));
