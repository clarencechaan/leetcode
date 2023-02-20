/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  let uglies = new Set([1]);

  let threshold = 1000;
  let result;

  function buildUglies(num = 1) {
    if ((uglies.size > 1 && uglies.has(num)) || num > threshold) return;
    uglies.add(num);
    for (const prime of primes) buildUglies(num * prime);
  }

  do {
    buildUglies();
    result = [...uglies].sort((a, b) => (a > b ? 1 : -1))[n - 1];
    threshold *= 10;
    uglies = new Set([1]);
  } while (!result);

  return result;
};

console.log(nthSuperUglyNumber(85, [5, 7, 11, 13, 17, 19, 29, 43, 47, 53]));
