/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const consecutiveIndices = [];

  function getConsecutiveLength(idx) {
    let length = 1;
    while (nums[idx + length - 1] + 1 === nums[idx + length]) length++;
    return length;
  }

  for (let i = 0; i < nums.length; ) {
    const length = getConsecutiveLength(i);
    consecutiveIndices.push([i, i + length]);
    i += length;
  }

  const result = [];
  for (const [start, end] of consecutiveIndices)
    for (let i = start; i < end; i++)
      if (i + k <= end) result.push(nums[i + k - 1]);
      else if (i + k <= nums.length) result.push(-1);

  return result;
};

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3));
