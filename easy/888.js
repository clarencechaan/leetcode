/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceTotal = aliceSizes.reduce((sum, num) => sum + num, 0);
  const bobTotal = bobSizes.reduce((sum, num) => sum + num, 0);

  const diff = bobTotal - aliceTotal;
  for (const alice of aliceSizes)
    for (const bob of bobSizes)
      if (2 * (bob - alice) === diff) return [alice, bob];
};

console.log(fairCandySwap([1, 2], [2, 3]));
