/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let numSpaces = text.length - text.replaceAll(" ", "").length;
  let words = text.split(" ").filter((word) => word);
  let spaceLength =
    words.length > 1 ? Math.floor(numSpaces / (words.length - 1)) : 0;

  let result = words.join(" ".repeat(spaceLength));
  result += " ".repeat(numSpaces - (words.length - 1) * spaceLength);
  return result;
};

console.log(reorderSpaces("a b c "));
