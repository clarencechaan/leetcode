/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function (nums) {
  let max = nums.reduce((max, val) => Math.max(max, val), 0);
  let primes = new Set();
  for (let i = 2; i <= max; i++) if (isPrime(i)) primes.add(i);

  function isPrime(x) {
    for (let i = 2; i < x; i++) if (x % i === 0) return false;
    return true;
  }

  let set = new Set();
  for (const num of nums)
    for (let i = 2; i <= num; i++)
      if (!set.has(i) && num % i === 0 && primes.has(i)) set.add(i);

  return set.size;
};

console.log(distinctPrimeFactors([2, 4, 3, 7, 10, 6]));
