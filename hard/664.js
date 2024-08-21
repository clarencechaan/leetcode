/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  let str = "";
  for (const char of s) if (char !== str[str.length - 1]) str += char;

  const memo = Array(str.length)
    .fill()
    .map(() => []);

  function steps(start = 0, end = str.length) {
    if (end - start === 1) return 1;
    if (memo[start][end] !== undefined) return memo[start][end];

    const firstLetter = str[start];
    const lastLetter = str[end - 1];
    let min = Infinity;

    for (let i = start + 1; i < end; i++)
      min = Math.min(
        min,
        steps(start, i) + steps(i, end) + (firstLetter === lastLetter ? -1 : 0)
      );

    memo[start][end] = min;
    return min;
  }

  return steps();
};

console.log(strangePrinter("aaabbb"));
