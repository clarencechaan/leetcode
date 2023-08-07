/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  let base2PowerLastDigits = [];

  let lastDigit = 1;
  for (let i = 0; i < nums.length; i++) {
    lastDigit = (lastDigit * 2) % 10;
    base2PowerLastDigits.push(lastDigit);
  }

  let result = [];

  for (let length = 1; length <= nums.length; length++) {
    let lastDigit = 0;
    for (let i = length - 1; i >= 0; i--) {
      if (nums[i]) {
        lastDigit += base2PowerLastDigits[length - 1 - i];
        lastDigit %= 10;
      }
    }
    if (lastDigit === 0 || lastDigit === 5) result.push(true);
    else result.push(false);
  }

  return result;
};
