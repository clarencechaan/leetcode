/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let result = 0;
  let monday = 1;

  for (let i = 0; i < n; i++) {
    if (i % 7 === 0 && i > 0) monday++;
    result += (i % 7) + monday;
  }

  return result;
};

console.log(totalMoney(20));
