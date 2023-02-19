/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (new Set(suits).size === 1) return "Flush";

  let rankCounts = {};
  for (const rank of ranks)
    if (!rankCounts[rank]) rankCounts[rank] = 1;
    else rankCounts[rank]++;

  for (const rank in rankCounts)
    if (rankCounts[rank] >= 3) return "Three of a Kind";

  for (const rank in rankCounts) if (rankCounts[rank] >= 2) return "Pair";

  return "High Card";
};

console.log(bestHand([10, 10, 2, 12, 9], ["a", "b", "c", "a", "d"]));
