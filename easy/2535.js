/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elementSum = 0;
  let digitSum = 0;
  for (const num of nums) {
    elementSum += num;
    for (const digit of num.toString()) digitSum += parseInt(digit);
  }
  return Math.abs(elementSum - digitSum);
};
