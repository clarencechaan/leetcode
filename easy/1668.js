/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let k = 0;
  let repeated = word;
  for (i = 0; i < Math.ceil(sequence.length / word.length); i++) {
    if (sequence.includes(repeated)) {
      k++;
      repeated += word;
    } else break;
  }
  return k;
};

console.log(maxRepeating("ababc", "ab"));
