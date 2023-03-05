/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  let result = [[nums1[0], nums2[0]]];

  let indices = Array(nums1.length).fill(null);
  indices[0] = 0;
  for (let i = 1; i < k; i++) {
    let pairs = [];
    for (let j = 0; j < indices.length; j++) {
      if (indices[j] === null) {
        pairs.push([j, 0]);
        break;
      }
      if (
        (j === 0 || indices[j - 1] > indices[j]) &&
        indices[j] < nums2.length - 1
      )
        pairs.push([j, indices[j] + 1]);
    }

    if (!pairs.length) break;

    let [minA, minB] = [null, null];
    for (const [a, b] of pairs)
      if (
        (minA === null && minB === null) ||
        nums1[a] + nums2[b] < nums1[minA] + nums2[minB]
      )
        [minA, minB] = [a, b];

    result.push([nums1[minA], nums2[minB]]);

    indices[minA] = minB;
  }

  return result;
};

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
