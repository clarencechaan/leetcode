/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
  if (target === 1) return 0;
  if (target % 2 === 1) return 1 + minMoves(target - 1, maxDoubles);
  if (maxDoubles > 0) return 1 + minMoves(target / 2, maxDoubles - 1);
  return target - 1;
};

console.log(minMoves(10, 4));
