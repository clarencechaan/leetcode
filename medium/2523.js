/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
  }

  const primes = [];
  for (let i = left; i <= right && primes.length < 104; i++)
    if (isPrime(i)) primes.push(i);

  if (primes.length < 2) return [-1, -1];

  let result = [primes[0], primes[1]];
  for (let i = 2; i < primes.length; i++)
    if (primes[i] - primes[i - 1] < result[1] - result[0])
      result = [primes[i - 1], primes[i]];
  return result;
};

console.log(closestPrimes(10, 19));
