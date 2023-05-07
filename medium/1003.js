/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = s.split("");
  for (let i = 0; i + 3 <= arr.length; i++)
    if (arr[i] === "a" && arr[i + 1] === "b" && arr[i + 2] === "c") {
      arr = [...arr.slice(0, i), ...arr.slice(i + 3)];
      i = Math.max(-1, i - 3);
    }

  return arr.length === 0;
};

console.log(isValid("abccba"));
