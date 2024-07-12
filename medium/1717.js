/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let score = 0;
  const count = { a: 0, b: 0 };

  for (let i = 0; i <= s.length; i++) {
    const char = s[i];
    if (char === "a" || char === "b") {
      count[char]++;
      if (
        (x > y && char === "b" && count.a) ||
        (y > x && char === "a" && count.b)
      ) {
        count.a--;
        count.b--;
        score += Math.max(x, y);
      }
    } else {
      score += Math.min(count.a, count.b) * Math.min(x, y);
      count.a = 0;
      count.b = 0;
    }
  }

  return score;
};

console.log(maximumGain((s = "cdbcbbaaabab"), (x = 4), (y = 5)));
