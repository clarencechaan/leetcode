/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  if (["a", "c", "e", "g"].includes(coordinates[0]))
    return coordinates[1] % 2 === 0;
  return coordinates[1] % 2 === 1;
};

console.log(squareIsWhite("a1"));
