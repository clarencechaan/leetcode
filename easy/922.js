/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let odd = [];
  let even = [];
  for (const num of nums)
    if (num % 2 === 0) even.push(num);
    else odd.push(num);

  let result = [];

  for (let i = 0; i < Math.round(nums.length / 2); i++) {
    if (even.length) result.push(even.pop());
    if (odd.length) result.push(odd.pop());
  }

  return result;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
