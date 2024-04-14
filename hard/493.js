/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  // naive approach:
  // 1. go through each pair (i,j)
  // 2. check if pair is a reverse pair and increment our result if it is

  // for each index `i` we want to QUICKLY count the number of elements to the right of `i` that are less than half of `nums[i]`

  // better idea:
  // 1. create a sorted (ascending) array `sortedSeen` that has all elements we have seen so far
  // 2. iterate through `nums` from right to left,
  //    => for each `nums[i]`, binary search through `sortedSeen` for the index of the first element that is >= `nums[i]/2`, call this index `j`
  //    => add `j` to our result
  //    => insert `nums[i]` into `sortedSeen`

  // returns the index of the first element in `arr` that is greater than or equal to `num`
  function binarySearchIndex(arr, num) {
    let min = 0;
    let max = arr.length;
    let idx = Math.floor((min + max) / 2);
    while (min < max) {
      if (arr[idx] >= num) max = idx;
      else min = idx + 1;
      idx = Math.floor((min + max) / 2);
    }
    return idx;
  }

  let result = 0;
  const sortedSeen = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    const j = binarySearchIndex(sortedSeen, nums[i] / 2);
    result += j;
    const insertIdx = binarySearchIndex(sortedSeen, nums[i]);
    sortedSeen.splice(insertIdx, 0, nums[i]);
  }

  return result;
};

console.log(reversePairs([1, 3, 2, 3, 1]));
