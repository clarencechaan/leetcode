/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  let answer = [];
  for (const num of nums) answer.push(...num.toString().split(""));
  return answer;
};
