/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let min = 1;
  let max = piles.reduce((max, pile) => Math.max(max, pile), 0);
  let mid = Math.floor((min + max) / 2);

  function hoursForK(k) {
    return piles.reduce((hours, pile) => hours + Math.ceil(pile / k), 0);
  }

  while (min < max) {
    let hours = hoursForK(mid);
    if (hours < h) max = mid - 1;
    else if (h < hours) min = mid + 1;
    else max = mid;
    mid = Math.floor((min + max) / 2);
  }

  while (hoursForK(mid) > h) mid++;

  return mid;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
