/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  const length = word.length;
  word = word.split("");
  for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
      case "a":
        if (word[i + 1] !== "b") word.splice(i + 1, 0, "b");
        break;
      case "b":
        if (word[i + 1] !== "c") word.splice(i + 1, 0, "c");
        if (word[i - 1] !== "a") word.splice(i, 0, "a");
        break;
      case "c":
        if (word[i - 1] !== "b") {
          word.splice(i, 0, "b");
          i -= 2;
        }
        break;
    }
  }

  return word.length - length;
};

console.log(addMinimum("b"));
