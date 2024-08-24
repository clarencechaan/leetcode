/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  if (+n <= 10) {
    return (n - 1).toString();
  }

  // edit the second half of `str` so it forms a palindrome with the first half
  function mirrorHalf(str) {
    if (+str <= 9) return "9";
    let mirrored = str.split("");
    for (let i = 0; i < str.length / 2; i++)
      if (str[i] !== str[str.length - 1 - i])
        mirrored[str.length - 1 - i] = str[i];
    mirrored = mirrored.join("");
    return mirrored;
  }

  // add `value` to `n` and call `mirrorHalf` to make it a palindrome
  function getPalindromeAfterAdd(value) {
    return mirrorHalf((+n + value).toString());
  }

  // add/subtract all power of 10s, and check each if the resulting palindrome
  // is better than `result`
  let result = mirrorHalf(n) !== n ? mirrorHalf(n) : "0";
  for (let pow = 0; pow <= n.length / 2; pow++) {
    const minus = getPalindromeAfterAdd(-(10 ** pow));
    const add = getPalindromeAfterAdd(10 ** pow);
    if (minus !== n && Math.abs(minus - n) <= Math.abs(result - n))
      result = minus;
    if (add !== n && Math.abs(add - n) < Math.abs(result - n)) result = add;
  }

  return result;
};

console.log(nearestPalindromic("123"));
