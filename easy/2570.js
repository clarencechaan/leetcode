/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let dict = {};
  for (const num of nums1) dict[num[0]] = num[1];
  for (const num of nums2)
    if (!dict[num[0]]) dict[num[0]] = num[1];
    else dict[num[0]] += num[1];
  let result = [];
  for (const id in dict) result.push([parseInt(id), dict[id]]);
  result.sort((a, b) => (a[0] > b[0] ? 1 : -1));
  return result;
};

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
);
