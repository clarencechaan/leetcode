/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n = nums1.length + nums2.length;
  let count = 0;
  let i = -1;
  let j = -1;

  let prev2 = [null, null];
  let mid = Math.floor(n / 2);
  while (count <= mid) {
    prev2[0] = prev2[1];
    if (j >= nums2.length - 1 || nums1[i + 1] < nums2[j + 1])
      prev2[1] = nums1[++i];
    else prev2[1] = nums2[++j];
    count++;
  }

  if (n % 2 === 1) return prev2[1];
  else return (prev2[0] + prev2[1]) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2]));
