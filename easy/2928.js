/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  let ways = 0;
  for (let child1 = 0; child1 <= limit; child1++)
    for (let child2 = 0; child2 <= limit; child2++) {
      const child3 = n - child1 - child2;
      if (child3 > limit || child3 < 0) continue;
      ways++;
    }
  return ways;
};
