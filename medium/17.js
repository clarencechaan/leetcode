/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const dict = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [];

  (function recurse(digits, letters = "") {
    if (!digits && letters) result.push(letters);
    else if (!digits && !letters) return;
    else {
      const rest = digits.substring(1);
      for (const letter of dict[digits[0]]) recurse(rest, letters + letter);
    }
  })(digits);

  return result;
};

console.log(letterCombinations("429"));
