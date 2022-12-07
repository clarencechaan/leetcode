/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let set = new Set();
  for (const word of words)
    set.add(
      word
        .split("")
        .map((char) => morse[char.charCodeAt() - 97])
        .join("")
    );
  return set.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
