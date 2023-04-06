/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  for (let i = 0; i < asteroids.length - 1; i++) {
    if (asteroids[i] > 0 && asteroids[i + 1] < 0) {
      if (asteroids[i] > Math.abs(asteroids[i + 1]))
        asteroids = [...asteroids.slice(0, i + 1), ...asteroids.slice(i + 2)];
      else if (asteroids[i] < Math.abs(asteroids[i + 1]))
        asteroids = [...asteroids.slice(0, i), ...asteroids.slice(i + 1)];
      else asteroids = [...asteroids.slice(0, i), ...asteroids.slice(i + 2)];
      i = Math.max(-1, i - 2);
    }
  }

  return asteroids;
};

console.log(asteroidCollision([10, 2, -5]));
