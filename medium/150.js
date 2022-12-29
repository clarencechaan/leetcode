/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  function isOperand(token) {
    return token === "+" || token === "-" || token === "*" || token === "/";
  }

  let arr = [...tokens];
  arr = arr.map((token) => (isOperand(token) ? token : parseInt(token)));

  while (arr.length >= 3) {
    for (let i = 0; i < arr.length - 2; i++) {
      if (
        !isOperand(arr[i]) &&
        !isOperand(arr[i + 1]) &&
        isOperand(arr[i + 2])
      ) {
        switch (arr[i + 2]) {
          case "+":
            arr[i] += arr[i + 1];
            arr = [...arr.slice(0, i + 1), ...arr.slice(i + 3)];
            break;
          case "-":
            arr[i] -= arr[i + 1];
            arr = [...arr.slice(0, i + 1), ...arr.slice(i + 3)];
            break;
          case "*":
            arr[i] *= arr[i + 1];
            arr = [...arr.slice(0, i + 1), ...arr.slice(i + 3)];
            break;
          case "/":
            const quotient = arr[i] / arr[i + 1];
            arr[i] = quotient >= 0 ? Math.floor(quotient) : Math.ceil(quotient);
            arr = [...arr.slice(0, i + 1), ...arr.slice(i + 3)];
        }
      }
    }
  }

  return arr[0];
};

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
