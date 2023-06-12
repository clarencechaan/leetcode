/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let arr = s.split("");
  let val = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") val++;
    else if (arr[i] === ")") {
      if (val > 0) val--;
      else arr[i] = "";
    }
  }

  val = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ")") val++;
    else if (arr[i] === "(") {
      if (val > 0) val--;
      else arr[i] = "";
    }
  }

  return arr.join("");
};

console.log(minRemoveToMakeValid("())()((("));
