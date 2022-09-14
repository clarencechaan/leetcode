/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
// ability to swap two characters => word can be rearranged to any order
//    => we only care about counts, and whether the two sets of unique letters
//       are the same
var closeStrings = function (word1, word2) {
  let word1arr = word1.split("");
  let word2arr = word2.split("");
  let word1letters = [];
  let word2letters = [];
  let word1counts = [];
  let word2counts = [];

  for (const char of word1arr) {
    if (!word1letters.includes(char)) word1letters.push(char);
  }
  for (const char of word2arr) {
    if (!word2letters.includes(char)) word2letters.push(char);
  }

  for (const char of word1letters) {
    word1counts.push(word1arr.filter((elem) => elem === char).length);
  }
  for (const char of word2letters) {
    word2counts.push(word2arr.filter((elem) => elem === char).length);
  }

  return (
    setsEqual(word1letters, word2letters) && setsEqual(word1counts, word2counts)
  );
};

function setsEqual(set1, set2) {
  if (set1.length !== set2.length) return false;

  const sorted1 = set1.sort((a, b) => (a > b ? 1 : -1));
  const sorted2 = set2.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) return false;
  }

  return true;
}

console.log(closeStrings("a", "aa"));
