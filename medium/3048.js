/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
var earliestSecondToMarkIndices = function (nums, changeIndices) {
  const n = nums.length;
  const m = changeIndices.length;

  function isPossible(second) {
    const indicesMap = {};
    const indexAtSecond = Array(second).fill(-1);
    for (let i = second - 1; i >= 0; i--) {
      if (indicesMap[changeIndices[i]] !== undefined) continue;
      indicesMap[changeIndices[i]] = i;
      indexAtSecond[i] = changeIndices[i];
    }
    if (Object.keys(indicesMap).length < n) return false;
    for (let numsIdx in indicesMap) {
      let secondIdx = indicesMap[numsIdx];
      let count = 0;
      while (count < nums[numsIdx - 1] && secondIdx >= 0) {
        if (indexAtSecond[secondIdx] !== -1) secondIdx--;
        else {
          indexAtSecond[secondIdx] = numsIdx;
          count++;
        }
      }
      if (count < nums[numsIdx - 1]) return false;
    }
    return true;
  }

  // binary search for first second where possible
  let min = 1;
  let max = m;
  let mid = Math.floor((min + max) / 2);
  while (min < max) {
    if (isPossible(mid)) max = mid;
    else min = mid + 1;
    mid = Math.floor((min + max) / 2);
  }
  if (isPossible(mid)) return mid;
  return -1;
};
