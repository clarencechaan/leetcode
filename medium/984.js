/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
  let result = "";
  while (a || b) {
    if (!b || result.slice(-2) === "bb") {
      result += "a";
      a--;
    } else if (!a || result.slice(-2) === "aa") {
      result += "b";
      b--;
    } else if (a >= b) {
      result += "a";
      a--;
    } else {
      result += "b";
      b--;
    }
  }

  return result;
};

console.log(strWithout3a3b(4, 1));
