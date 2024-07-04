/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  // naive approach:
  // go through every window, sort it, and get the median

  // better approach:
  // add and remove elements as we slide the window, via binary search

  function binarySearch(window, num) {
    let min = 0;
    let max = k;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (window[mid] < num) min = mid + 1;
      else max = mid;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  function getMedian(window) {
    if (k % 2 === 1) return window[Math.floor(k / 2)];
    else return (window[k / 2] + window[k / 2 - 1]) / 2;
  }

  const window = nums.slice(0, k).sort((a, b) => (a > b ? 1 : -1));

  const ans = [];
  for (let i = 0; i + k <= nums.length; i++) {
    ans[i] = getMedian(window);
    const removeIdx = binarySearch(window, nums[i]);
    window.splice(removeIdx, 1);
    const insertIdx = binarySearch(window, nums[i + k]);
    window.splice(insertIdx, 0, nums[i + k]);
  }

  return ans;
};

console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
