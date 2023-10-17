/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  function repairPossible(minutes) {
    let remaining = cars;
    for (let i = 0; i < ranks.length && remaining > 0; i++)
      remaining -= Math.floor(Math.sqrt(minutes / ranks[i]));
    return remaining <= 0;
  }

  let min = 1;
  let max = ranks.reduce((r, min) => Math.min(r, min), Infinity) * cars ** 2;
  let mid = Math.floor((min + max) / 2);
  while (min < max) {
    if (repairPossible(mid)) max = mid;
    else min = mid + 1;
    mid = Math.floor((min + max) / 2);
  }

  return mid;
};

console.log(repairCars([4, 2, 3, 1], 10));
