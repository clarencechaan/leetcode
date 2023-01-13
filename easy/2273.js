/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  let result = [...words].map((word) => ({
    word,
    sorted: word.split("").sort().join(""),
  }));

  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < result.length; i++)
      if (result[i].sorted === result[i - 1].sorted) {
        result = [...result.slice(0, i), ...result.slice(i + 1)];
        i--;
        done = false;
      }
  }

  result = result.map((obj) => obj.word);
  return result;
};

console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]));
