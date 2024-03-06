/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function (n) {
  // step1: find all numbers <= n that are prime
  // step2: for every prime number x that we have found, check if (n-x) is also prime;
  //    if so, then add this pair to result

  // prime: divisible only by 1 and itself
  // create an array, where isPrime[i] is equal to whether or not i is prime
  let isPrime = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i] !== undefined) continue;
    isPrime[i] = true;
    for (let j = 2 * i; j <= n; j += i) isPrime[j] = false;
  }

  // find prime number pairs
  let result = [];
  for (let i = 2; i <= n / 2; i++)
    if (isPrime[i] && isPrime[n - i]) result.push([i, n - i]);

  return result;
};

console.log(findPrimePairs(10));

// 2 3 5 7 11 13 17 19 23

// might be an easier way to find all numbers between 1 and n that are prime
// => maybe find all numbers between 1 and n that are NOT prime, and take the disjoint set of that
// => a number is not prime if it is divisible by any number between 2 and n-1
// => maybe it has something to do with lowest common factor
// => a number x is not prime if it is divisible by some prime that is < x

// a number x is not prime if there exists some combination of
// 2*a + 3*b + 5*c + 7*d + ... === x
