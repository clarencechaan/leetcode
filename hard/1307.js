/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
var isSolvable = function (words, result) {
  if (words.some((word) => word.length > result.length)) return false;

  const charSet = new Set();
  for (const word of words) for (const char of word) charSet.add(char);
  for (const char of result) charSet.add(char);

  const grid = [];
  for (const word of words) {
    const row = word.split("");
    while (row.length < result.length) row.unshift(" ");
    grid.push(row);
  }

  grid.push(result.split(""));

  const width = grid[0].length;
  const height = grid.length;

  const notZero = new Set();
  for (const word of words) if (word.length > 1) notZero.add(word[0]);
  if (result.length > 1) notZero.add(result[0]);

  function recursion(
    x = width - 1,
    y = 0,
    map = {},
    carry = Array(width).fill(0)
  ) {
    if (x < 0) {
      if (carry[-1]) return false;
      return true;
    }

    const char = grid[y][x];
    if (char === " ") return recursion(x, y + 1, map, carry);

    if (y < height - 1) {
      if (map[char] !== undefined) return recursion(x, y + 1, map, carry);

      for (let digit = 0; digit <= 9; digit++) {
        if (map[digit]) continue;
        if (digit === 0 && notZero.has(char)) continue;
        map[char] = digit;
        map[digit] = char;

        if (recursion(x, y + 1, map, carry)) return true;

        delete map[char];
        delete map[digit];
      }
    } else {
      let sum = carry[x];
      for (let i = 0; i < height - 1; i++)
        if (grid[i][x] === " ") continue;
        else sum += map[grid[i][x]];
      sum = sum.toString();
      const digit = parseInt(sum.slice(-1));
      if (digit === 0 && notZero.has(char)) return false;
      if (sum.length >= 2) carry[x - 1] = parseInt(sum[0]);
      else carry[x - 1] = 0;

      if (map[digit] !== undefined || map[char] !== undefined) {
        if (map[digit] !== char) return false;
        if (map[char] !== digit) return false;

        if (recursion(x - 1, 0, map, carry)) return true;
      } else {
        map[digit] = char;
        map[char] = digit;

        if (recursion(x - 1, 0, map, carry)) return true;

        delete map[digit];
        delete map[char];
      }
    }

    return false;
  }

  return recursion();
};

console.log(isSolvable(["SEND", "MORE"], "MONEY"));
