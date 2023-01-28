/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  // return s.split(" ").slice(0, k).join(" ");

  let result = "";

  for (let i = 0; i < s.length && k > 0; i++) {
    if (s[i] === " ") k--;
    if (k) result += s[i];
  }

  return result;
};

console.log(truncateSentence("Hello how are you", 3));
