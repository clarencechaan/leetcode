/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  let counts1 = {};
  let counts2 = {};

  const words1 = s1.split(" ");
  const words2 = s2.split(" ");

  for (const word of words1)
    if (!counts1[word]) counts1[word] = 1;
    else counts1[word]++;

  for (const word of words2)
    if (!counts2[word]) counts2[word] = 1;
    else counts2[word]++;

  let result = [];

  for (const word in counts1)
    if (counts1[word] === 1 && !counts2[word]) result.push(word);
  for (const word in counts2)
    if (counts2[word] === 1 && !counts1[word]) result.push(word);

  return result;
};

console.log(uncommonFromSentences("apple apple", "banana"));
