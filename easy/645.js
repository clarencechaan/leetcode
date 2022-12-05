/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let repeated;
  let arr = [];

  for (const num of nums)
    if (arr[num - 1]) repeated = num;
    else arr[num - 1] = num;

  for (let i = 0; i <= arr.length; i++) if (!arr[i]) return [repeated, i + 1];
};

console.log(findErrorNums([1, 1]));
