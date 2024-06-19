/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  const n = bloomDay.length;
  if (n < m * k) return -1;

  // binary search for the lowest day where we can make `m` bouquets

  // return true if we can make `m` bouquets after `day` days
  // otherwise return false
  function canMakeBouquets(day) {
    let bouquetsLeft = m;

    let streak = 0;
    for (let i = 0; i < n && bouquetsLeft > 0; i++) {
      if (bloomDay[i] <= day) streak++;
      else streak = 0;

      if (streak === k) {
        bouquetsLeft--;
        streak = 0;
      }
    }

    return bouquetsLeft === 0;
  }

  // binary search
  let min = 1;
  let max = Math.max(...bloomDay);
  let mid = Math.floor((min + max) / 2);
  while (min < max) {
    if (canMakeBouquets(mid)) max = mid;
    else min = mid + 1;
    mid = Math.floor((min + max) / 2);
  }

  return mid;
};

console.log(minDays([1, 10, 3, 10, 2], 3, 1));
