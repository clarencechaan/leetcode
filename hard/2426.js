/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} diff
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, diff) {
  // naive approach: count pairs one by one
  // too slow O(n^2)

  // rearrange `nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff`
  // nums1[i] - nums2[i] - diff <= nums1[j] - nums2[j]

  // for each `i`, find the number of elements to the right of `i` that are
  // greater than or equal to `nums3[i]-diff`

  const n = nums1.length;

  const nums3 = [];
  for (let i = 0; i < n; i++) nums3[i] = nums1[i] - nums2[i];

  const sorted = [...nums3].sort((a, b) => (a > b ? -1 : 1));

  // return the index of the last element in descending array `arr` that is >=
  // `num`
  function binarySearchIdx(arr, num) {
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.ceil((min + max) / 2);
    while (min < max) {
      if (arr[mid] >= num) min = mid;
      else max = mid - 1;
      mid = Math.ceil((min + max) / 2);
    }
    if (arr[mid] >= num) return mid;
    return -1;
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const num = nums3[i];
    const idx1 = binarySearchIdx(sorted, num);
    sorted.splice(idx1, 1);
    const idx2 = binarySearchIdx(sorted, num - diff);
    result += idx2 + 1;
  }

  return result;
};

console.log(numberOfPairs([3, 2, 5], [2, 2, 1], 1));
