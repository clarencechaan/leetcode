/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let middleDivisorSeen = false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0)
      if (middleDivisorSeen) return false;
      else middleDivisorSeen = true;
  }

  return middleDivisorSeen;
};

console.log(isThree(4));
