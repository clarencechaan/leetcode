/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function (flips) {
  flips = flips.map((flip) => flip - 1);
  const n = flips.length;
  let binary = Array(n).fill(false);

  function isPrefixAligned(idx) {
    for (let i = 0; i <= idx; i++) if (!binary[i]) return false;
    for (let i = idx + 1; i < n; i++) if (binary[i]) return false;
    return true;
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    binary[flips[i]] = !binary[flips[i]];
    if (isPrefixAligned(i)) result++;
  }

  return result;
};

console.log(numTimesAllBlue([3, 2, 4, 1, 5]));
