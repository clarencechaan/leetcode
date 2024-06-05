const MOD = 10 ** 9 + 7;

/**
 * @param {string} s
 * @param {number} k
 * @param {number} minLength
 * @return {number}
 */
var beautifulPartitions = function (s, k, minLength) {
  const n = s.length;

  // convert prime digits to `1`, convert non-prime digits to `0`
  const arr = s.split("");
  for (let i = 0; i < n; i++) {
    switch (arr[i]) {
      case "2":
      case "3":
      case "5":
      case "7":
        arr[i] = 1;
        break;
      default:
        arr[i] = 0;
    }
  }

  if (arr[0] === 0) return 0;
  if (arr[n - 1] === 1) return 0;

  // find all the indices at which we can split the array
  let splits = new Set();
  for (let i = minLength; i <= n - minLength; i++)
    if (arr[i - 1] === 0 && arr[i] === 1) splits.add(i);

  splits = [0, ...splits, n];

  const dp = Array(n)
    .fill()
    .map(() => []);
  function recursion(sIdx = 0, remaining = k) {
    if (remaining === 0 && sIdx === splits.length - 1) return 1;
    if (remaining <= 0 || sIdx >= splits.length) return 0;
    if (dp[sIdx][remaining] >= 0) return dp[sIdx][remaining];

    let result = 0;
    for (let nextIdx = sIdx + 1; nextIdx < splits.length; nextIdx++)
      if (splits[nextIdx] - splits[sIdx] < minLength) continue;
      else result += recursion(nextIdx, remaining - 1);

    result %= MOD;
    dp[sIdx][remaining] = result;

    return result;
  }

  return recursion();
};

console.log(beautifulPartitions("23542185131", 3, 2));
