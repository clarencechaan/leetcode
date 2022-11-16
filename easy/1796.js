/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  const digit = [...new Set(s.split(""))]
    .filter((char) => char >= "0" && char <= "9")
    .map((char) => parseInt(char))
    .sort()
    .reverse()[1];
  return digit !== undefined ? digit : -1;
};

console.log(secondHighest("dfa12321afd"));
