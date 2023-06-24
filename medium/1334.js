/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  let edgeMap = {};

  for (let [from, to, weight] of edges) {
    if (!edgeMap[from]) edgeMap[from] = {};
    if (!edgeMap[to]) edgeMap[to] = {};
    edgeMap[from][to] = weight;
    edgeMap[to][from] = weight;
  }

  function numReachable(city) {
    function recurse(city, map, total = 0) {
      if (total > distanceThreshold) return;
      if (map[city] <= total) return;
      map[city] = total;

      for (let nextCity in edgeMap[city])
        recurse(nextCity, map, total + edgeMap[city][nextCity]);
    }

    let map = {};
    recurse(city, map);

    return Object.entries(map).filter(
      ([, reachable]) => reachable <= distanceThreshold
    ).length;
  }

  let city = -1;
  let minReachable = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    let reachable = numReachable(i);
    if (reachable < minReachable) {
      city = i;
      minReachable = reachable;
    }
  }

  return city;
};

console.log(
  findTheCity(
    4,
    [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1],
    ],
    4
  )
);
