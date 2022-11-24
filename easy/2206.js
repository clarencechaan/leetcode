/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const sorted = nums.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i < sorted.length - 1; i = i + 2)
    if (sorted[i] !== sorted[i + 1]) return false;
  return true;
};

console.log(divideArray([1, 2, 3, 4]));
