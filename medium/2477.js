/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  let cities = [{ id: 0, neighbours: [], onRoute: 0 }];
  for (const [a, b] of roads) {
    if (!cities[a]) cities[a] = { id: a, neighbours: [], onRoute: 1 };
    if (!cities[b]) cities[b] = { id: b, neighbours: [], onRoute: 1 };
    cities[a].neighbours.push(b);
    cities[b].neighbours.push(a);
  }

  let queue = new Set([0]);
  function markNext(id = 0) {
    for (const prev of cities[id].neighbours) {
      if (cities[prev].next) continue;
      cities[prev].next = id;
      queue.add(prev);
    }
  }
  for (const id of queue) markNext(id);
  queue = [...queue].reverse();

  function getLitresAt(id) {
    if (id === 0) return 0;
    const nextId = cities[id].next;
    cities[nextId].onRoute += cities[id].onRoute;
    return Math.ceil(cities[id].onRoute / seats);
  }

  let result = 0;
  for (const id of queue) result += getLitresAt(id);
  return result;
};

console.log(
  minimumFuelCost(
    [
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    5
  )
);
