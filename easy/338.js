/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let binary = [0];
  let ones = 0;

  function increment() {
    for (let i = 0; i < binary.length; i++) {
      if (!binary[i]) {
        binary[i] = 1;
        ones++;
        break;
      } else {
        binary[i] = 0;
        ones--;
        if (i === binary.length - 1) {
          binary[i + 1] = 1;
          ones++;
          break;
        }
      }
    }
  }

  let result = [];

  for (let i = 0; i <= n; i++) {
    result.push(ones);
    increment();
  }

  return result;
};

console.log(countBits(5));
