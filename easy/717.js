/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  for (let i = 0; i < bits.length; i++) {
    if (i === bits.length - 1) return true;
    if (bits[i] === 0) continue;
    i++;
  }

  return false;
};
