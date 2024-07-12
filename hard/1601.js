/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  const buildings = Array(n).fill(0);

  function recursion(idx = 0) {
    if (idx >= requests.length) {
      if (buildings.every((b) => b === 0)) return 0;
      return -Infinity;
    }

    const [from, to] = requests[idx];

    buildings[from]--;
    buildings[to]++;

    const take = 1 + recursion(idx + 1);

    buildings[from]++;
    buildings[to]--;

    const skip = recursion(idx + 1);

    return Math.max(take, skip);
  }

  return recursion();
};

console.log(
  maximumRequests(5, [
    [0, 1],
    [1, 0],
    [0, 1],
    [1, 2],
    [2, 0],
    [3, 4],
  ])
);
