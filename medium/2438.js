/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
  let pow = Math.floor(Math.log(n) / Math.log(2));

  let powers = [];
  while (n > 0) {
    const powerOf2 = 2 ** pow;
    if (n >= powerOf2) {
      n -= powerOf2;
      powers.push(powerOf2);
    } else {
      pow--;
    }
  }

  powers.sort((a, b) => (a > b ? 1 : -1));

  function getProduct(left, right) {
    let product = powers[left];
    for (let i = left + 1; i <= right; i++) product *= powers[i];
    return product % (10 ** 9 + 7);
  }

  const answers = queries.map((query) => getProduct(...query));
  return answers;
};

console.log(
  productQueries(15, [
    [0, 1],
    [2, 2],
    [0, 3],
  ])
);
