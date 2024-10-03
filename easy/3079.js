/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  function encrypt(num) {
    num = num.toString().split("");
    const max = num.reduce((max, digit) => Math.max(max, digit), 0);
    return +max.toString().repeat(num.length);
  }

  return nums.map(encrypt).reduce((sum, enc) => sum + enc, 0);
};

console.log(sumOfEncryptedInt([1, 2, 3]));
