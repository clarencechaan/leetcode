/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  function isSelfDividing(num) {
    return num
      .toString()
      .split("")
      .every((digit) => digit > 0 && num % digit === 0);
  }

  let result = [];
  for (let i = left; i <= right; i++) if (isSelfDividing(i)) result.push(i);

  return result;
};

console.log(selfDividingNumbers(47, 85));
