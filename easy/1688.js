/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let matches = 0;
  let teams = n;

  while (teams > 1) {
    if (teams % 2 === 0) {
      matches += teams / 2;
      teams /= 2;
    } else if (teams % 2 === 1) {
      matches += (teams - 1) / 2;
      teams = (teams - 1) / 2 + 1;
    }
  }

  return matches;
};

console.log(numberOfMatches(14));
