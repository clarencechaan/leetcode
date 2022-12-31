/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let primes = [2];

  function isPrime(n) {
    for (let i = 0; primes[i] <= Math.sqrt(n); i++)
      if (n % primes[i] === 0) return false;
    primes.push(n);
    return true;
  }

  let count = 0;
  if (2 < n) count++;
  for (let i = 3; i < n; i += 2) if (isPrime(i)) count++;
  return count;
};

console.log(countPrimes(5000000));
