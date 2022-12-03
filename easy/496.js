/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = [];

  for (const num of nums1) {
    const idx = nums2.indexOf(num);
    let nextGreater = -1;
    for (let i = idx + 1; i < nums2.length; i++)
      if (nums2[i] > num) {
        nextGreater = nums2[i];
        break;
      }
    result.push(nextGreater);
  }

  return result;
};

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
