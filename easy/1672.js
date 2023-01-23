/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;

  for (const account of accounts) {
    let wealth = account.reduce((sum, money) => sum + money, 0);
    max = Math.max(wealth, max);
  }

  return max;
};
