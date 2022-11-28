/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  return nums.sort((a, b) => (a > b ? 1 : -1))[
    Math.round((nums.length - 1) / 2)
  ];
};

console.log(majorityElement([2]));
