/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let answer = [[], []];
  for (const num of nums1) {
    if (!answer[0].includes(num) && !nums2.includes(num)) answer[0].push(num);
  }
  for (const num of nums2) {
    if (!answer[1].includes(num) && !nums1.includes(num)) answer[1].push(num);
  }
  return answer;
};

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
