/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var minOperations = function (n, m) {
  const nStr = n.toString();
  let nums = [];
  for (
    let i = +("1" + "0".repeat(nStr.length - 1));
    i <= +"9".repeat(nStr.length);
    i++
  )
    nums.push(i);

  let primes = [2];
  function isPrime(n) {
    for (let i = 0; primes[i] <= Math.sqrt(n); i++)
      if (n % primes[i] === 0) return false;
    return true;
  }

  for (let i = 3; i <= +"9".repeat(nStr.length); i++)
    if (isPrime(i)) primes.push(i);
  primes = new Set(primes);

  nums = nums.filter((num) => !primes.has(num));

  const nodesMap = {};
  for (const num of nums)
    nodesMap[num] = { val: num, neighbours: [], cost: Infinity };
  for (const num of nums) {
    const arr = num.toString().split("");
    for (let i = 0; i < arr.length; i++) {
      arr[i]++;
      const str1 = arr.join("");
      arr[i] -= 2;
      const str2 = arr.join("");
      arr[i]++;
      if (nodesMap[str1]) nodesMap[num].neighbours.push(+str1);
      if (nodesMap[str2]) nodesMap[num].neighbours.push(+str2);
    }
  }

  if (!nodesMap[n] || !nodesMap[m]) return -1;

  for (const num of nums)
    nodesMap[num].neighbours.sort((a, b) => (a > b ? 1 : -1));
  const queue = [[n, n]];
  for (const [num, cost] of queue) {
    if (nodesMap[num].cost <= cost) continue;
    nodesMap[num].cost = cost;
    const neighbours = nodesMap[num].neighbours;
    for (const neighbour of neighbours)
      queue.push([neighbour, cost + neighbour]);
  }

  if (nodesMap[m].cost === Infinity) return -1;
  return nodesMap[m].cost;
};
