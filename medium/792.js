/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let idxMap = {};
  for (let i = 0; i < s.length; i++) {
    if (!idxMap[s[i]]) idxMap[s[i]] = { indices: [] };
    idxMap[s[i]].indices.push(i);
  }

  let result = 0;
  loop1: for (const word of words) {
    for (const letter in idxMap) idxMap[letter].pos = 0;
    let idx = -1;
    loop2: for (const letter of word) {
      for (
        let i = idxMap[letter]?.pos;
        i < idxMap[letter]?.indices.length;
        i++
      ) {
        if (idx < idxMap[letter].indices[i]) {
          idx = idxMap[letter].indices[i];
          idxMap[letter].pos = i;
          continue loop2;
        }
      }
      continue loop1;
    }
    result++;
  }

  return result;
};

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));
