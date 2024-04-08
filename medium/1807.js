/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  const dict = {};
  for (const [key, val] of knowledge) dict[key] = val;

  let result = "";
  let isWritingBracketWord = false;
  let bracketWord = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") isWritingBracketWord = true;
    else if (s[i] === ")") {
      isWritingBracketWord = false;
      result += dict[bracketWord] || "?";
      bracketWord = "";
    } else if (isWritingBracketWord) bracketWord += s[i];
    else result += s[i];
  }

  return result;
};

console.log(
  evaluate("(name)is(age)yearsold", [
    ["name", "bob"],
    ["age", "two"],
  ])
);
