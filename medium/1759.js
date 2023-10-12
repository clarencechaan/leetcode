/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  let streaks = [1];
  for (let i = 1; i < s.length; i++)
    if (s[i] === s[i - 1]) streaks[streaks.length - 1]++;
    else streaks.push(1);

  let result = 0;
  for (const s of streaks) result += (s * (s + 1)) / 2;
  result = result % (10 ** 9 + 7);

  return result;
};

console.log(countHomogenous("abbcccaa"));
