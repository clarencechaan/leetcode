/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;

  let idx = [];
  for (let i = 0; i < s.length; i++) if (s[i] !== goal[i]) idx.push(i);

  if (idx.length > 2) return false;
  else if (idx.length === 0) {
    let counts = {};
    for (const char of s)
      if (!counts[char]) counts[char] = 1;
      else counts[char]++;
    for (const char in counts) if (counts[char] >= 2) return true;
    return false;
  }

  let swapped = s.split("");
  swapped[idx[0]] = s[idx[1]];
  swapped[idx[1]] = s[idx[0]];
  swapped = swapped.join("");

  return swapped === goal;
};

console.log(buddyStrings("ab", "ab"));
