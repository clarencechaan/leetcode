/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
  // idea:
  // 1. sort asteroids in ascending order
  // 2. from left to right, keep destroying asteroids until no more asteroids can be destroyed
  // 3. return true if we have reached the end of the array; otherwise return false;

  asteroids.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i < asteroids.length; i++) {
    if (mass >= asteroids[i]) mass += asteroids[i];
    else return false;
  }

  return true;
};

console.log(asteroidsDestroyed(10, [3, 9, 19, 5, 21]));
