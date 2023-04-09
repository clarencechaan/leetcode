/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  let freqMap = {};
  for (const char of s) freqMap[char] = (freqMap[char] || 0) + 1;

  let letters = [];
  for (const char in freqMap) letters.push(char);
  letters.sort((a, b) =>
    freqMap[a] > freqMap[b] || (freqMap[a] === freqMap[b] && a > b) ? -1 : 1
  );

  let arr = [];
  for (let i = 0; i < letters.length; i++)
    if (freqMap[letters[i]] && arr[arr.length - 1] !== letters[i]) {
      arr.push(letters[i]);
      freqMap[letters[i]]--;
      i = -1;
      letters.sort((a, b) =>
        freqMap[a] > freqMap[b] || (freqMap[a] === freqMap[b] && a > b) ? -1 : 1
      );
    }

  return arr.length === s.length ? arr.join("") : "";
};

console.log(reorganizeString("vvvlo"));

//
