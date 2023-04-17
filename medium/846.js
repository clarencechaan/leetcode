/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;

  let freqMap = {};
  let unique = [];
  for (const card of hand) {
    if (!freqMap[card]) {
      freqMap[card] = 0;
      unique.push(card);
    }
    freqMap[card]++;
  }

  unique.sort((a, b) => (a > b ? 1 : -1));
  let remaining = hand.length;
  while (remaining) {
    for (const card of unique) {
      while (freqMap[card])
        for (let i = 0; i < groupSize; i++) {
          if (freqMap[card + i] === undefined || freqMap[card + i] < 0)
            return false;
          freqMap[card + i]--;
          remaining--;
        }
    }
  }

  return true;
};

console.log(isNStraightHand([8, 10, 12], 3));
