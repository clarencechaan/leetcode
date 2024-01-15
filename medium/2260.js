/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  let idxMap = {};
  for (let i = 0; i < cards.length; i++) {
    if (!idxMap[cards[i]]) idxMap[cards[i]] = [];
    idxMap[cards[i]].push(i);
  }

  let min = Infinity;
  for (const card in idxMap)
    for (let i = 1; i < idxMap[card].length; i++)
      min = Math.min(min, 1 + idxMap[card][i] - idxMap[card][i - 1]);

  return min === Infinity ? -1 : min;
};

console.log(minimumCardPickup([3, 4, 2, 3, 4, 7]));
