/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
var minCost = function (maxTime, edges, passingFees) {
  const n = passingFees.length;

  // create graph and bfs
  const cities = [];
  for (let i = 0; i < n; i++)
    cities[i] = {
      city: i,
      fee: passingFees[i],
      neighbours: [],
      costAtTime: [],
    };

  for (const [a, b, time] of edges) {
    cities[a].neighbours.push([b, time]);
    cities[b].neighbours.push([a, time]);
  }

  cities[0].costAtTime[0] = cities[0].fee;

  for (let time = 0; time < maxTime; time++)
    for (let city = 0; city < n; city++)
      if (!cities[city].costAtTime[time]) continue;
      else
        for (const [neighbourCity, roadTime] of cities[city].neighbours) {
          const neighourTime = time + roadTime;
          if (neighourTime > maxTime) continue;
          cities[neighbourCity].costAtTime[neighourTime] = Math.min(
            cities[neighbourCity].costAtTime[neighourTime] || Infinity,
            cities[city].costAtTime[time] + cities[neighbourCity].fee
          );
        }

  let ans = cities[n - 1].costAtTime.reduce(
    (min, cost) => Math.min(min, cost),
    Infinity
  );
  if (ans === Infinity) ans = -1;

  return ans;
};

console.log(
  minCost(
    30,
    [
      [0, 1, 10],
      [1, 2, 10],
      [2, 5, 10],
      [0, 3, 1],
      [3, 4, 10],
      [4, 5, 15],
    ],
    [5, 1, 2, 20, 20, 3]
  )
);
