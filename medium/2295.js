/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (nums, operations) {
  let to = {};
  let from = {};

  for (const [a, b] of operations)
    if (from[a] === undefined) [to[a], from[b]] = [b, a];
    else {
      [to[from[a]], from[b]] = [b, from[a]];
      delete from[a];
    }

  for (let i = 0; i < nums.length; i++)
    if (to[nums[i]] !== undefined) nums[i] = to[nums[i]];
  return nums;
};

console.log(
  arrayChange(
    [1, 2, 4, 6],
    [
      [1, 3],
      [4, 7],
      [6, 1],
    ]
  )
);
