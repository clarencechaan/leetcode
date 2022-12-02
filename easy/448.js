/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let distinct = [];
  for (const num of nums) distinct[num - 1] = num;

  let result = [];
  for (let i = 0; i < nums.length; i++) if (!distinct[i]) result.push(i + 1);
  return result;
};

console.log(findDisappearedNumbers([1, 1, 5, 5, 5]));
