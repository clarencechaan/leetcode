/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s
    .split(" ")
    .filter((word) => word)
    .slice(-1)[0].length;
};

console.log(lengthOfLastWord("luffy is still joyboy"));
