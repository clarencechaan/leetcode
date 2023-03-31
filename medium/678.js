/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  function isValidLR(idx = 0, val = 0, wild = 0) {
    if (idx === s.length) return wild >= val || val === 0;
    if (val < 0 && wild < -val) return false;
    else if (s[idx] === "(") return isValidLR(idx + 1, val + 1, wild);
    else if (s[idx] === ")") return isValidLR(idx + 1, val - 1, wild);
    else if (s[idx] === "*") return isValidLR(idx + 1, val, wild + 1);
  }

  function isValidRL(idx = s.length - 1, val = 0, wild = 0) {
    if (idx === -1) return wild >= val || val === 0;
    if (val < 0 && wild < -val) return false;
    else if (s[idx] === ")") return isValidRL(idx - 1, val + 1, wild);
    else if (s[idx] === "(") return isValidRL(idx - 1, val - 1, wild);
    else if (s[idx] === "*") return isValidRL(idx - 1, val, wild + 1);
  }

  return isValidLR() && isValidRL();
};

console.log(checkValidString("(*))"));
