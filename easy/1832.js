/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let seen = [];
  for (const char of sentence) {
    if (!seen.includes(char)) seen.push(char);
  }
  return seen.length === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
