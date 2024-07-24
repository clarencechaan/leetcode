/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function (s) {
  function isValid(length) {
    if (s.length % length !== 0) return false;
    const str = s.slice(0, length).split("").sort().join("");
    for (let i = length; i < s.length; i += length)
      if (
        s
          .slice(i, i + length)
          .split("")
          .sort()
          .join("") !== str
      )
        return false;
    return true;
  }

  for (let length = 1; length <= s.length; length++)
    if (isValid(length)) return length;
};

console.log(minAnagramLength("abba"));
