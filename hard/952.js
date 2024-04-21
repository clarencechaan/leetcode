/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function (nums) {
  // idea:
  // 1. create a graph of prime numbers (the prime factors of each number in
  //    `nums`)
  // 2. for every pair of nodes in the graph, connect them if there is at least
  //    one number in `nums` that has the two node values as prime factors
  // 3. get the largest connected component in the graph of prime numbers

  function getPrimeFactors(num) {
    const primeFactors = [];
    while (num % 2 === 0) {
      if (primeFactors[primeFactors.length - 1] !== 2) primeFactors.push(2);
      num = Math.floor(num / 2);
    }
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
      while (num % i === 0) {
        primeFactors.push(i);
        num = Math.floor(num / i);
      }
    }
    if (num > 2) primeFactors.push(num);
    return primeFactors;
  }

  const graph = {};
  const primes = new Set();

  for (const num of nums) {
    if (num === 1) continue;
    const primeFactors = [...getPrimeFactors(num)];
    for (const prime of primeFactors) {
      primes.add(prime);
      if (!graph[prime])
        graph[prime] = { prime, count: 0, neighbours: new Set() };
    }
    graph[primeFactors[0]].count++;
    for (let i = 0; i < primeFactors.length - 1; i++) {
      const prime1 = primeFactors[i];
      const prime2 = primeFactors[i + 1];
      graph[prime1].neighbours.add(prime2);
      graph[prime2].neighbours.add(prime1);
    }
  }

  let seen = new Set();
  function getSize(prime) {
    if (seen.has(prime)) return 0;
    seen.add(prime);
    let result = graph[prime].count;
    for (const neighbour of graph[prime].neighbours)
      result += getSize(neighbour);
    return result;
  }

  let result = 0;
  for (const prime of primes) result = Math.max(result, getSize(prime));
  return result;
};

console.log(largestComponentSize([4, 6, 15, 35]));
