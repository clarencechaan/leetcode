/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let uglies = new Set();

  function buildUglies(a = 0, b = 0, c = 0) {
    const calculation = Math.pow(2, a) * Math.pow(3, b) * Math.pow(5, c);
    if (calculation > 3000000000 || uglies.has(calculation)) return;
    uglies.add(calculation);
    buildUglies(a + 1, b, c);
    buildUglies(a, b + 1, c);
    buildUglies(a, b, c + 1);
  }

  buildUglies();

  uglies = [...uglies];
  uglies.sort((a, b) => a - b);
  return uglies[n - 1];
};

console.log(nthUglyNumber(1690));
