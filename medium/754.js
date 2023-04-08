/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  target = Math.abs(target);
  if (target <= 1) return target;

  let n = 1;
  while (((n + 1) * (n + 2)) / 2 <= target) n++;

  let position = (n * (n + 1)) / 2;
  if (position < target) {
    do {
      n++;
      position += n;
    } while ((position - target) % 2 !== 0);
  }
  return n;
};

console.log(reachNumber(4));
