/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let indices1 = [];
  let indices2 = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (
        nums1[i] === nums2[j] &&
        !indices1.includes(i) &&
        !indices2.includes(j)
      ) {
        indices1.push(i);
        indices2.push(j);
      }
    }
  }

  return indices1.map((index) => nums1[index]);
};

console.log(intersect([1, 2, 2, 1], [2]));
