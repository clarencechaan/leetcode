/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  words.sort((a, b) => (a.length > b.length ? 1 : -1));

  let result = 0;
  loop: for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++)
      if (words[i] === words[j].slice(-words[i].length)) continue loop;
    result += words[i].length + 1;
  }

  return result;
};

console.log(minimumLengthEncoding(["t"]));
