/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function (s) {
  function preceding(letter) {
    return String.fromCharCode(((letter.charCodeAt() - 97 + 25) % 26) + 97);
  }

  function operation(str) {
    return str.split("").map(preceding).join("");
  }

  const arr = s.split("");
  const left = arr.findIndex((char) => char !== "a");
  if (left === -1) return "a".repeat(s.length - 1) + "z";

  const right = arr.findIndex((char, idx) => idx > left && char === "a");
  if (right === -1) return s.slice(0, left) + operation(s.slice(left));

  return s.slice(0, left) + operation(s.slice(left, right)) + s.slice(right);
};
