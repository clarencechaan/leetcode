/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  const n = distance.length;

  let clockwiseStops = (destination - start + n) % n;
  let clockwise = 0;
  for (let i = 0; i < clockwiseStops; i++)
    clockwise += distance[(start + i) % n];

  let counterClockwiseStops = n - clockwiseStops;
  let counterClockwise = 0;
  for (let i = 0; i < counterClockwiseStops; i++)
    counterClockwise += distance[(start - 1 - i + n) % n];

  return Math.min(clockwise, counterClockwise);
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2));
