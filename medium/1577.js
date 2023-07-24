/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {
  let result = 0;

  for (let i = 0; i < nums1.length; i++)
    for (let j = 0; j < nums2.length; j++)
      for (let k = j + 1; k < nums2.length; k++)
        if (nums1[i] ** 2 == nums2[j] * nums2[k]) result++;

  for (let i = 0; i < nums2.length; i++)
    for (let j = 0; j < nums1.length; j++)
      for (let k = j + 1; k < nums1.length; k++)
        if (nums2[i] ** 2 == nums1[j] * nums1[k]) result++;

  return result;
};

console.log(numTriplets([7, 4], [5, 2, 8, 9]));
