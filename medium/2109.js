/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  // idea:
  // 1. convert s to an array
  // 2. from back to front, splice a space at the index given by the spaces array
  // (slow because of splicing) => another idea is to create the result string from scratch, which would be O(n)

  // optimized:
  // 1. reverse spaces
  // 2. iterate through each character of the string
  // 3. on each iteration i:
  //        if i === the last element of spaces, pop spaces and push a space onto our result string
  //        push the character at s[i] to our result string
  // 5. return our result string

  spaces.reverse();

  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (spaces[spaces.length - 1] === i) {
      spaces.pop();
      result += " ";
    }
    result += s[i];
  }

  return result;
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]));
