/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => (a > b ? 1 : -1));

  let ordering = [];
  while (deck.length) {
    if (ordering.length) ordering.unshift(ordering.pop());
    ordering.unshift(deck.pop());
  }

  return ordering;
};

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]));
