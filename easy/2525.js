/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  const bulky =
    length >= 10000 ||
    width >= 10000 ||
    height >= 10000 ||
    length * width * height >= 1000000000;
  const heavy = mass >= 100;

  if (bulky && heavy) return "Both";
  else if (bulky) return "Bulky";
  else if (heavy) return "Heavy";
  else return "Neither";
};
