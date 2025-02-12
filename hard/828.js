/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
  // try keeping track of index of each char
  const charIndices = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!charIndices[char]) charIndices[char] = [];
    charIndices[char].push(i);
  }

  // returns the number of substrings in which `char` is unique
  function countSubstrings(char) {
    let count = 0;
    const indices = charIndices[char];
    for (let i = 0; i < indices.length; i++) {
      const index = indices[i];
      const start = (indices[i - 1] ?? -1) + 1;
      const end = indices[i + 1] ?? s.length;
      count += (index - start + 1) * (end - index);
    }
    return count;
  }

  let result = 0;
  for (const char in charIndices) {
    result += countSubstrings(char);
  }
  return result;
};

console.log(uniqueLetterString("ABC"));
