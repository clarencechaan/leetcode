/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => (a > b ? 1 : -1));
  let coins = 0;
  for (let i = piles.length - 2; i >= piles.length / 3; i -= 2)
    coins += piles[i];
  return coins;
};

console.log(maxCoins([2, 4, 1, 2, 7, 8]));
