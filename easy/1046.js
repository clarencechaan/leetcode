/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => (a > b ? 1 : -1));
    stones[stones.length - 2] =
      stones[stones.length - 1] - stones[stones.length - 2];
    stones.pop();
    if (stones[stones.length - 1] === 0) stones.pop();
  }

  return stones[0] || 0;
};

console.log(lastStoneWeight([1]));
