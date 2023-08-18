/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  let str = s
    .split("")
    .filter((char) => char === ")" || char === "(")
    .join("");
  while (str.includes("()")) str = str.replaceAll("()", "");
  let minRemovals = str.length;

  function strIsValid(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") count++;
      else if (str[i] === ")") count--;
      if (count < 0) return false;
    }
    return count === 0;
  }

  let arr = s.split("");
  let result = new Set();
  function recurse(idx = 0, remove = new Set()) {
    if (remove.size >= minRemovals) {
      let str = arr.filter((val, idx) => !remove.has(idx)).join("");
      if (strIsValid(str)) result.add(str);
      return;
    }
    if (idx >= s.length) return;

    for (let i = idx; i < s.length; i++) {
      if (s[i] !== "(" && s[i] !== ")") continue;
      let nextRemove = new Set(remove);
      nextRemove.add(i);
      recurse(i + 1, nextRemove);
    }
  }

  recurse();
  return [...result];
};

console.log(removeInvalidParentheses("()())()"));
