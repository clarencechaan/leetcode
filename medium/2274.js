/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function (bottom, top, special) {
  special.sort((a, b) => (a > b ? 1 : -1));

  let max = 0;
  for (let i = 0; i <= special.length; i++) {
    const prev = special[i - 1] ?? bottom - 1;
    const curr = special[i] ?? top + 1;
    const consecutive = curr - prev - 1;
    max = Math.max(max, consecutive);
  }

  return max;
};
