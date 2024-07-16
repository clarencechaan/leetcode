/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const runningSum = [0];
  for (let i = 0; i < nums.length; i++)
    runningSum[i + 1] = runningSum[i] + nums[i];

  function isLessThanK(start, end) {
    return (end - start) * (runningSum[end] - runningSum[start]) < k;
  }

  // search for largest `end` where `isLessThanK(start,end)` returns true
  function binarySearch(start) {
    let min = start;
    let max = nums.length;
    let end = Math.ceil((min + max) / 2);

    while (min < max) {
      if (isLessThanK(start, end)) min = end;
      else max = end - 1;
      end = Math.ceil((min + max) / 2);
    }

    return end;
  }

  let ans = 0;
  for (let start = 0; start < nums.length; start++) {
    const end = binarySearch(start);
    ans += end - start;
  }

  return ans;
};

console.log(countSubarrays([2, 1, 4, 3, 5], 10));
