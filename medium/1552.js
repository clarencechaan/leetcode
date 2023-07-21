/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  position.sort((a, b) => (a > b ? 1 : -1));

  function isValid(force) {
    let balls = m - 1;
    let idx = 0;
    for (let i = 1; i < position.length && balls; i++)
      if (position[i] - position[idx] >= force) {
        balls--;
        idx = i;
      }
    return balls === 0;
  }

  let min = 1;
  let max = position[position.length - 1];
  let mid = Math.ceil((min + max) / 2);
  while (min < max) {
    if (isValid(mid)) min = mid;
    else max = mid - 1;
    mid = Math.ceil((min + max) / 2);
  }

  return mid;
};

console.log(maxDistance([1, 2, 3, 4, 7], 3));

// find the max value of force that is valid (i.e., isValid(force) === true)
//  => use binary search
