/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  let result = 0;
  let productFreq = {};
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++) {
      let prod = nums[i] * nums[j];
      productFreq[prod] = (productFreq[prod] || 0) + 1;
    }

  for (const prod in productFreq) {
    let freq = productFreq[prod];
    result += ((freq * (freq - 1)) / 2) * 8;
  }

  return result;
};

console.log(tupleSameProduct([1, 2, 4, 5, 10]));
