/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  // search for index of first number in `arr` that is >= `num`
  function binarySearch(num, arr) {
    let min = 0;
    let max = arr.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (arr[mid] >= num) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    if (arr[mid] >= num) return mid;
    return -1;
  }

  function validNumsOnlyCount(arr) {
    const minIndices = [];
    const maxIndices = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === minK) minIndices.push(i);
      if (arr[i] === maxK) maxIndices.push(i);
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      const idx1 = binarySearch(i, minIndices);
      const idx2 = binarySearch(i, maxIndices);
      if (idx1 === -1 || idx2 === -1) continue;
      count += arr.length - Math.max(minIndices[idx1], maxIndices[idx2]);
    }
    return count;
  }

  const valid = [];
  for (let i = 0; i < nums.length; i++)
    if (nums[i] < minK || nums[i] > maxK) continue;
    else {
      let j = i + 1;
      while (minK <= nums[j] && nums[j] <= maxK) j++;
      valid.push(nums.slice(i, j));
      i = j - 1;
    }

  return valid.reduce((sum, arr) => sum + validNumsOnlyCount(arr), 0);
};

console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5));
