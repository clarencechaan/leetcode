/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let map = {};
  for (const [numPassengers, from, to] of trips) {
    map[from] = (map[from] || 0) + numPassengers;
    map[to] = (map[to] || 0) - numPassengers;
  }

  let entries = Object.entries(map).map(([time, passengerChange]) => [
    parseInt(time),
    passengerChange,
  ]);
  entries.sort((a, b) => (a[0] > b[0] ? 1 : -1));

  let curr = 0;
  for (const [, passengerChange] of entries) {
    curr += passengerChange;
    if (curr > capacity) return false;
  }

  return true;
};

console.log(
  carPooling(
    (trips = [
      [2, 1, 5],
      [3, 3, 7],
    ]),
    (capacity = 4)
  )
);
