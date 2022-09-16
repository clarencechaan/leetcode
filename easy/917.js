/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const letters = s.split("").filter(isLetter);

  let answer = [];
  for (const char of s) {
    if (isLetter(char)) answer.push(letters.pop());
    else answer.push(char);
  }

  return answer.join("");
};

function isLetter(char) {
  return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
}

console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
