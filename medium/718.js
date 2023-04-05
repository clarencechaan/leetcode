/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let max = 0;

  for (let i = -nums1.length + 1; i < nums1.length; i++) {
    let length = 0;
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i + j] === nums2[j]) {
        length++;
        max = Math.max(max, length);
      } else length = 0;
    }
  }

  return max;
};

console.log(findLength([0, 0, 0, 0, 1], [1, 0, 0, 0, 0]));
