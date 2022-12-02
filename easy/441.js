/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let remaining = n;
  let rows = 0;

  for (let i = 1; remaining >= i; i++) {
    rows++;
    remaining -= i;
  }

  return rows;
};

console.log(arrangeCoins(10));
