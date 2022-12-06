/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const largest = [...nums].sort((a, b) => (a > b ? -1 : 1))[0];
  for (const num of nums) if (num !== largest && largest < 2 * num) return -1;
  return nums.indexOf(largest);
};

console.log(dominantIndex([1, 2, 3, 4]));
