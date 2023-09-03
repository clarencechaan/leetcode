/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
  const n = nums.length;
  let result = [];

  let validIdx = 0;
  while (result.length < k) {
    let min = nums[validIdx];
    let remaining = k - result.length;
    let nextValidIdx = validIdx + 1;
    for (let i = validIdx; i <= n - remaining; i++)
      if (nums[i] < min) {
        min = nums[i];
        nextValidIdx = i + 1;
      }
    result.push(min);
    validIdx = nextValidIdx;
  }

  return result;
};

console.log(mostCompetitive([3, 5, 2, 6], 2));
