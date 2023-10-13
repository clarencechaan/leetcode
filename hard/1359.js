/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function (n) {
  if (n === 1) return 1;
  return (n * (2 * n - 1) * countOrders(n - 1)) % (10 ** 9 + 7);
};

console.log(countOrders(1));
