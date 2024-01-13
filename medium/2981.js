/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  let substrings = new Set();

  for (let i = 0, sub = ""; i < s.length; i++) {
    if (!sub || sub[0] === s[i]) sub += s[i];
    else sub = s[i];
    substrings.add(sub);
  }

  substrings = [...substrings].sort((a, b) => (a.length > b.length ? -1 : 1));

  function getNumOfOccurences(sub) {
    let occurences = 0;
    for (let i = 0; i < s.length; i++)
      if (s.slice(i, i + sub.length) === sub) occurences++;
    return occurences;
  }

  for (const sub of substrings)
    if (getNumOfOccurences(sub) >= 3) return sub.length;

  return -1;
};

console.log(maximumLength("aaaa"));
