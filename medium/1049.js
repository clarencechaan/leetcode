/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  let map = {};

  function recurse(idx = 0, w1 = 0, w2 = 0) {
    if (idx === stones.length) return Math.abs(w2 - w1);
    if (map[idx + "," + w1 + "," + w2] !== undefined)
      return map[idx + "," + w1 + "," + w2];

    const min = Math.min(
      recurse(idx + 1, w1 + stones[idx], w2),
      recurse(idx + 1, w1, w2 + stones[idx])
    );

    map[idx + "," + w1 + "," + w2] = min;
    return min;
  }

  return recurse();
};

console.log(lastStoneWeightII([21, 60, 61, 20, 31]));
