/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
  function isPrime(x) {
    for (let i = 2; i < x; i++) if (x % i === 0) return false;
    return true;
  }

  const primes = [0];
  for (let i = 2; i < 1000; i++) if (isPrime(i)) primes.push(i);

  function greatestPrime(ceiling) {
    let min = 0;
    let max = primes.length - 1;
    let mid = Math.ceil((min + max) / 2);
    while (min < max) {
      if (primes[mid] >= ceiling) max = mid - 1;
      else min = mid;
      mid = Math.ceil((min + max) / 2);
    }
    return primes[mid];
  }

  for (let i = 0; i < nums.length; i++) {
    let prime = greatestPrime(nums[i] - (nums[i - 1] || 0));
    nums[i] -= prime;
    if (nums[i] <= nums[i - 1]) return false;
  }

  return true;
};

console.log(primeSubOperation([4, 9, 6, 10]));
