/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (s, k) {
  function convert(char) {
    const charPos = char.charCodeAt() - 97;
    let smallest = charPos;
    let cost = 0;
    for (let i = 1; i <= Math.min(k, 25); i++) {
      const up = (charPos + i) % 26;
      const down = (charPos - i + 26) % 26;
      const smaller = Math.min(up, down);
      if (smaller < smallest) {
        smallest = smaller;
        cost = i;
      }
    }
    k -= cost;
    return String.fromCharCode(smallest + 97);
  }

  return s.split("").map(convert).join("");
};

console.log(getSmallestString("zbbz", 3));
