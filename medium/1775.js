/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;

  if (n > m * 6 || m > n * 6) return -1;

  const sum1 = nums1.reduce((sum, num) => sum + num, 0);
  const sum2 = nums2.reduce((sum, num) => sum + num, 0);

  let diff = sum1 - sum2;

  const choices = [];
  for (const num of nums1) choices.push([1 - num, 6 - num]);
  for (const num of nums2) choices.push([num - 6, num - 1]);

  let ans = 0;
  if (diff > 0) {
    choices.sort((a, b) => (a[0] > b[0] ? 1 : -1));
    for (let i = 0; i < choices.length && diff > 0; i++) {
      ans++;
      diff += choices[i][0];
    }
  } else if (diff < 0) {
    choices.sort((a, b) => (a[1] > b[1] ? -1 : 1));
    for (let i = 0; i < choices.length && diff < 0; i++) {
      ans++;
      diff += choices[i][1];
    }
  }

  return ans;
};

console.log(minOperations([1, 2, 3, 4, 5, 6], [1, 1, 2, 2, 2, 2]));
