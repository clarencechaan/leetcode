/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let counts = {};
  for (const char of s)
    if (!counts[char]) counts[char] = 1;
    else counts[char]++;

  let unique = [];
  for (const char in counts) if (counts[char] === 1) unique.push(char);
  for (let i = 0; i < s.length; i++) if (unique.includes(s[i])) return i;

  return -1;
};

console.log(firstUniqChar("aabb"));
