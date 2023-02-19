/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  amount.sort((a, b) => (a > b ? -1 : 1));
  let result = 0;

  while (amount[1] !== 0) {
    result++;
    amount[0]--;
    amount[1]--;
    amount.sort((a, b) => (a > b ? -1 : 1));
  }

  result += amount[0];
  return result;
};

console.log(fillCups([1, 4, 2]));
