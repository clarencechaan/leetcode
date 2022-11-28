/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const sorted = nums.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i < sorted.length - 1; i++)
    if (sorted[i] === sorted[i + 1]) return true;
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
