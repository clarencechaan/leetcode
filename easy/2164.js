/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  let even = [];
  let odd = [];

  for (let i = 0; i < nums.length; i += 2) even.push(nums[i]);
  for (let i = 1; i < nums.length; i += 2) odd.push(nums[i]);

  even.sort((a, b) => (a > b ? 1 : -1));
  odd.sort((a, b) => (a > b ? -1 : 1));

  let result = [];
  for (let i = 0; i < even.length; i++) result[i * 2] = even[i];
  for (let i = 0; i < odd.length; i++) result[i * 2 + 1] = odd[i];

  return result;
};

console.log(sortEvenOdd([4, 1, 2, 3]));
