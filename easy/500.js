/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  function isOnOneRow(word) {
    const row1 = "qwertyuiop";
    const row2 = "asdfghjkl";
    const row3 = "zxcvbnm";
    const arr = word.toLowerCase().split("");
    return (
      arr.every((char) => row1.includes(char)) ||
      arr.every((char) => row2.includes(char)) ||
      arr.every((char) => row3.includes(char))
    );
  }

  return words.filter((word) => isOnOneRow(word));
};

console.log(findWords(["adsdf", "sfd"]));
