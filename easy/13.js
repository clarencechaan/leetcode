/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const value = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let arr = [];
  for (let i = 0; i < s.length; i++)
    if (s[i + 1] && value[s[i]] < value[s[i + 1]]) {
      arr.push(s[i] + s[i + 1]);
      i++;
    } else arr.push(s[i]);

  let sum = 0;
  for (const roman of arr) {
    if (roman.length === 1) sum += value[roman];
    else if (roman.length === 2) sum += value[roman[1]] - value[roman[0]];
  }

  return sum;
};

console.log(romanToInt("MCMXCIV"));
