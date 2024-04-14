/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  // 1. create sets `set1` and `set2` for `nums1` and `nums2` respectively
  // 2. count number of occurences for each

  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result = [0, 0];
  for (const num of nums1) if (set2.has(num)) result[0]++;
  for (const num of nums2) if (set1.has(num)) result[1]++;

  return result;
};

console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]));
