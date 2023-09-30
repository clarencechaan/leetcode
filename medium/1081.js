/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  let distinct = new Set(s.split("").sort());

  function substringContainsSet(idx, set) {
    let remaining = new Set(set);
    for (let i = idx; i < s.length; i++) {
      remaining.delete(s[i]);
      if (!remaining.size) break;
    }
    return !remaining.size;
  }

  function recurse(idx = 0) {
    if (!distinct.size) return "";
    for (const char of distinct) {
      let charIdx = -1;
      for (let i = idx; i < s.length; i++)
        if (s[i] === char) {
          charIdx = i;
          break;
        }
      if (charIdx >= 0 && substringContainsSet(charIdx, distinct, char)) {
        distinct.delete(char);
        return char + recurse(charIdx + 1);
      }
    }
  }

  return recurse();
};

console.log(smallestSubsequence("bcabc"));
