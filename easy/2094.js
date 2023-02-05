/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  let result = new Set();

  for (let i = 0; i < digits.length - 2; i++)
    for (let j = i + 1; j < digits.length - 1; j++)
      for (let k = j + 1; k < digits.length; k++) {
        result.add("" + digits[i] + digits[j] + digits[k]);
        result.add("" + digits[i] + digits[k] + digits[j]);
        result.add("" + digits[j] + digits[i] + digits[k]);
        result.add("" + digits[j] + digits[k] + digits[i]);
        result.add("" + digits[k] + digits[i] + digits[j]);
        result.add("" + digits[k] + digits[j] + digits[i]);
      }

  result = [...result];
  result = result.filter((str) => str[0] !== "0" && str[2] % 2 === 0);
  result = result.map((str) => parseInt(str));
  result.sort((a, b) => (a > b ? 1 : -1));

  return result;
};

console.log(findEvenNumbers([2, 2, 8, 8, 2]));
