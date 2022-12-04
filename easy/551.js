/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let arr = s.split("");
  if (arr.filter((char) => char === "A").length >= 2) return false;

  let consecutiveLates = 0;
  for (const char of arr) {
    if (char === "L") consecutiveLates++;
    else consecutiveLates = 0;
    if (consecutiveLates >= 3) return false;
  }

  return true;
};

console.log(checkRecord("PPALLL"));
