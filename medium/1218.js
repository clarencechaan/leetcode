/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  let numToIdx = {};
  for (let i = 0; i < arr.length; i++)
    if (!numToIdx[arr[i]]) numToIdx[arr[i]] = [i];
    else numToIdx[arr[i]].push(i);

  function binarySearch(num, arr) {
    if (!arr) return -1;
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (arr[mid] > num) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    return arr[mid] > num ? arr[mid] : -1;
  }

  let memo = [];
  function recurse(idx) {
    if (memo[idx]) return memo[idx];
    let length = 1;
    let nextIdx = binarySearch(idx, numToIdx[arr[idx] + difference]);
    if (nextIdx > 0) length += recurse(nextIdx);
    memo[idx] = length;
    return length;
  }

  let result = 1;
  for (let i = 0; i < arr.length; i++) result = Math.max(result, recurse(i));
  return result;
};

console.log(longestSubsequence([1, 2, 3, 4], 1));
