/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let pos = 1;
  let direction = 1;
  for (let i = 0; i < time; i++) {
    pos += direction;
    if (pos === n || pos === 1) direction *= -1;
  }
  return pos;
};

console.log(passThePillow(4, 5));
