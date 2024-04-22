/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function (coins) {
  coins.sort((a, b) => (a > b ? 1 : -1));

  let sum = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] - sum > 1) break; // there is a gap between `sum` and `coins[i]`
    sum += coins[i]; // no gap, so we can make all values from 0 to sum
  }

  return sum + 1;
};

console.log(getMaximumConsecutive([1, 3]));
