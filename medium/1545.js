/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  let s = "0";
  while (s.length < k)
    s =
      s +
      "1" +
      s
        .split("")
        .map((char) => (char === "0" ? "1" : "0"))
        .reverse()
        .join("");
  return s[k - 1];
};

console.log(findKthBit(4, 11));
