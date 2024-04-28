/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  const runningMin = [];
  runningMin[k] = nums[k];
  for (let i = k + 1; i < nums.length; i++)
    runningMin[i] = Math.min(runningMin[i - 1], nums[i]);
  for (let i = k - 1; i >= 0; i--)
    runningMin[i] = Math.min(runningMin[i + 1], nums[i]);

  // try each value of min
  const minSet = new Set(runningMin);

  // binary search for the index of the last number in `runningMin` where the
  // index is >= `k` and the element is >= `num`
  function binarySearchRightPart(runningMin, num) {
    let left = k;
    let right = runningMin.length;
    let mid = Math.ceil((left + right) / 2);
    while (left < right) {
      if (runningMin[mid] >= num) left = mid;
      else right = mid - 1;
      mid = Math.ceil((left + right) / 2);
    }
    return mid;
  }

  // binary search for the index of the first number in `runningMin` where the
  // index is <= `k` and the element is >= `num`
  function binarySearchLeftPart(runningMin, num) {
    let left = 0;
    let right = k;
    let mid = Math.floor((left + right) / 2);
    while (left < right) {
      if (runningMin[mid] >= num) right = mid;
      else left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
    return mid;
  }

  let result = 0;
  for (const min of minSet) {
    const leftIdx = binarySearchLeftPart(runningMin, min);
    const rightIdx = binarySearchRightPart(runningMin, min);
    result = Math.max(result, min * (rightIdx - leftIdx + 1));
  }

  return result;
};

console.log(maximumScore([1, 4, 3, 7, 4, 5], 3));
