/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const sorted = nums.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i < sorted.length; i = i + 2)
    if (sorted[i] !== sorted[i + 1]) return sorted[i];
};

console.log(singleNumber([4, 1, 2, 1, 2]));
