/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
  const n = tops.length;
  let freqMapTop = {};
  let freqMapBot = {};
  for (const top of tops) freqMapTop[top] = (freqMapTop[top] || 0) + 1;
  for (const bot of bottoms) freqMapBot[bot] = (freqMapBot[bot] || 0) + 1;

  let possibleTops = [];
  for (const top in freqMapTop)
    if (freqMapTop[top] >= n / 2) possibleTops.push(parseInt(top));

  let possibleBots = [];
  for (const bot in freqMapBot)
    if (freqMapBot[bot] >= n / 2) possibleBots.push(parseInt(bot));

  let min = Infinity;
  for (const top of possibleTops) {
    let flips = 0;
    for (let i = 0; i < n; i++) {
      if (tops[i] === top) continue;
      else if (bottoms[i] === top) flips++;
      else {
        flips = Infinity;
        break;
      }
    }
    min = Math.min(min, flips);
  }

  for (const bot of possibleBots) {
    let flips = 0;
    for (let i = 0; i < n; i++) {
      if (bottoms[i] === bot) continue;
      else if (tops[i] === bot) flips++;
      else {
        flips = Infinity;
        break;
      }
    }
    min = Math.min(min, flips);
  }

  return min !== Infinity ? min : -1;
};

console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]));
