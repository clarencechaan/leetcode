/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let result = new Set();
  for (const num of nums)
    if (result.has(num)) result.delete(num);
    else result.add(num);
  return [...result];
};
