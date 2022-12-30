/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let max = [...nums];

  for (let i = 2; i < max.length; i++)
    max[i] += Math.max(max[i - 3] || 0, max[i - 2] || 0);

  return Math.max(max[max.length - 1] || 0, max[max.length - 2] || 0);
};

console.log(rob([2, 7, 9, 3, 1]));
