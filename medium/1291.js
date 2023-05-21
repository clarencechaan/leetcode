/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  let minDigits = low.toString().length;
  let maxDigits = high.toString().length;

  let result = [];
  for (let numDigits = minDigits; numDigits <= maxDigits; numDigits++) {
    for (let firstDigit = 1; firstDigit <= 9 - numDigits + 1; firstDigit++) {
      let str = "";
      for (let i = 0; i < numDigits; i++) str += firstDigit + i;
      let num = parseInt(str);
      if (low <= num && num <= high) result.push(num);
    }
  }

  return result;
};

console.log(sequentialDigits((low = 1000), (high = 13000)));
