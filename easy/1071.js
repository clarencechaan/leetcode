/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let maxLength = Math.min(str1.length, str2.length);

  for (let i = maxLength; i >= 1; i--)
    if (str1.length % i === 0 && str2.length % i === 0)
      if (
        str2.replaceAll(str1.substring(0, i), "") === "" &&
        str1.replaceAll(str2.substring(0, i), "") === ""
      )
        return str1.substring(0, i);

  return "";
};

console.log(gcdOfStrings("ABABAB", "ABAB"));
