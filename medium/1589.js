/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
var maxSumRangeQuery = function (nums, requests) {
  let priority = Array(nums.length).fill(0);
  for (const [start, end] of requests)
    for (let i = start; i <= end; i++) priority[i]++;
  nums.sort((a, b) => (a > b ? -1 : 1));
  priority = priority.sort((a, b) => (a > b ? -1 : 1));

  let result = 0;
  for (let i = 0; i < nums.length; i++) result += nums[i] * priority[i];
  return result % (10 ** 9 + 7);
};

console.log(
  maxSumRangeQuery(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 1],
    ]
  )
);
