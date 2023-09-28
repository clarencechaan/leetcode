/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
  let third = num / 3;
  if (third % 1 !== 0) return [];
  return [third - 1, third, third + 1];
};

console.log(sumOfThree(33));
