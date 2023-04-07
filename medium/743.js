/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let map = {};
  for (const time of times) {
    if (!map[time[0]]) map[time[0]] = {};
    map[time[0]][time[1]] = time[2];
  }

  let timeToNode = {};
  for (let i = 1; i <= n; i++) timeToNode[i] = Infinity;

  function traverse(node = k.toString(), timePassed = 0) {
    timeToNode[node] = Math.min(timeToNode[node], timePassed);
    for (const nextNode in map[node])
      if (timePassed + map[node][nextNode] < timeToNode[nextNode])
        traverse(nextNode, timePassed + map[node][nextNode]);
  }

  traverse();

  let result = 0;
  for (const node in timeToNode) result = Math.max(timeToNode[node], result);
  return result === Infinity ? -1 : result;
};

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);
