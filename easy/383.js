/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ransomCounts = {};
  let magazineCounts = {};

  for (const char of ransomNote)
    if (!ransomCounts[char]) ransomCounts[char] = 1;
    else ransomCounts[char]++;

  for (const char of magazine)
    if (!magazineCounts[char]) magazineCounts[char] = 1;
    else magazineCounts[char]++;

  for (const char in ransomCounts)
    if (ransomCounts[char] > magazineCounts[char] || !magazineCounts[char])
      return false;

  return true;
};

console.log(canConstruct("aa", "aab"));
