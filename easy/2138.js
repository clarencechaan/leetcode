/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  let arr = [];
  for (let i = 0; i < s.length; i += k) {
    let str = s[i];
    for (let j = 1; j < k; j++) {
      str += s[i + j] ? s[i + j] : fill;
    }
    arr.push(str);
  }
  return arr;
};

console.log(divideString("abcdefghij", 3, "x"));
