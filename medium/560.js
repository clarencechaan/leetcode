/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let runningSum = [0];
  let sum = 0;

  for (const num of nums) {
    sum += num;
    runningSum.push(sum);
  }

  let indices = {};
  for (let i = 0; i < runningSum.length; i++)
    if (!indices[runningSum[i]]) indices[runningSum[i]] = [i];
    else indices[runningSum[i]].push(i);

  function binarySearch(arr, target) {
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.floor((min + max) / 2);

    while (min < max) {
      if (arr[mid] > target) max = mid - 1;
      else if (arr[mid] < target) min = mid + 1;
      else break;
      mid = Math.floor((min + max) / 2);
    }

    return mid + (mid === -1 || arr[mid] <= target ? 1 : 0);
  }

  let result = 0;
  for (let i = 0; i < runningSum.length; i++)
    result += indices[runningSum[i] + k]
      ? indices[runningSum[i] + k].length -
        binarySearch(indices[runningSum[i] + k], i)
      : 0;
  return result;
};
