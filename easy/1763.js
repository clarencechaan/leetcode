/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  function isStringNice(str) {
    let lowercase = new Set();
    let uppercase = new Set();

    for (const char of str)
      if (char >= "a" && char <= "z") lowercase.add(char);
      else uppercase.add(char);

    for (const letter of str)
      if (
        !uppercase.has(letter.toUpperCase()) ||
        !lowercase.has(letter.toLowerCase())
      )
        return false;

    return true;
  }

  for (let length = s.length; ; length--)
    for (let i = 0; i + length <= s.length; i++)
      if (isStringNice(s.substring(i, i + length)))
        return s.substring(i, i + length);
};

console.log(longestNiceSubstring("c"));
