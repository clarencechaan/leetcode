/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let map = {};
  for (const flight of flights) {
    if (!map[flight[0]]) map[flight[0]] = {};
    map[flight[0]][flight[1]] = flight[2];
  }

  let priceToDst = {};
  function recurse(node = src, total = 0, stops = -1) {
    let min;
    if (
      priceToDst[node]?.min < total ||
      (priceToDst[node]?.total <= total && priceToDst[node]?.stops <= stops)
    ) {
      return priceToDst[node].min;
    } else if (stops > k) min = Infinity;
    else if (node == dst) min = total;
    else {
      min = Infinity;
      for (const nextNode in map[node])
        min = Math.min(
          min,
          recurse(nextNode, total + map[node][nextNode], stops + 1)
        );
    }
    priceToDst[node] = { min, total, stops };
    return min;
  }

  let result = recurse();
  return result === Infinity ? -1 : result;
};

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1
  )
);
