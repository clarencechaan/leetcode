/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  return s === s.split("").sort().join("");
};

console.log(checkString("bbb"));
