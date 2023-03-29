/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++)
    for (const root of dictionary)
      if (words[i].substring(0, root.length) === root) words[i] = root;
  return words.join(" ");
};

console.log(
  replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")
);
