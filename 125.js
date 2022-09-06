/**
 * @param {string} s
 * @return {boolean}
 */
// 1) convert string to lowercase
// 2) remove all non-alphanumeric characters from string
// 3) check if string is equal to reverse of string
var isPalindrome = function (s) {
  let normalized = s.toLowerCase();
  normalized = normalized
    .split("")
    .filter(
      (char) => (char >= "a" && char <= "z") || (char >= "0" && char <= 9)
    )
    .join("");

  let reversed = "";
  for (const char of normalized) {
    reversed = char + reversed;
  }

  return normalized === reversed;
};

console.log(isPalindrome(" "));
