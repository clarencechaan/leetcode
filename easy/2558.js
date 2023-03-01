/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  if (k === 0) return gifts.reduce((val, sum) => sum + val, 0);
  let max = -Infinity;
  let idx = -1;
  for (let i = 0; i < gifts.length; i++)
    if (gifts[i] > max) {
      max = gifts[i];
      idx = i;
    }
  gifts[idx] = Math.floor(Math.sqrt(gifts[idx]));
  return pickGifts(gifts, k - 1);
};

console.log(pickGifts([25, 64, 9, 4, 100], 4));
