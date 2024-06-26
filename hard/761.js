/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function (s) {
  // find all special strings
  // => check each pair of special strings to see if a good swap is possible;
  // where a good swap is one that results in a string lexicographically greater
  // than s
  // => keep repeating until no good swap is possible

  function isSpecial(start, end) {
    const count = [0, 0];
    for (let i = start; i < end; i++) {
      count[s[i]]++;
      if (count[1] < count[0]) return false;
    }
    return count[1] === count[0];
  }

  function getSpecial() {
    const special = [];
    for (let i = 0; i < s.length; i++)
      for (let j = i + 2; j <= s.length; j += 2)
        if (isSpecial(i, j)) special.push([i, j]);
    return special;
  }

  function makeSwap() {
    const special = getSpecial();
    for (let i = 0; i < special.length; i++) {
      const [s1, e1] = special[i];
      for (let j = i + 1; j < special.length; j++) {
        const [s2, e2] = special[j];
        if (e1 !== s2 && s1 !== e2) continue;
        let newStr;
        if (s1 < s2) newStr = s.slice(s2, e2) + s.slice(s1, e1);
        else newStr = s.slice(s1, e1) + s.slice(s2, e2);
        newStr =
          s.slice(0, Math.min(s1, s2)) + newStr + s.slice(Math.max(e1, e2));
        if (newStr > s) {
          s = newStr;
          return true;
        }
      }
    }
    return false;
  }

  while (makeSwap());
  return s;
};

console.log(makeLargestSpecial("11011000"));
