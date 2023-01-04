/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  function recurse(expression) {
    if (
      expression.indexOf("*") === -1 &&
      expression.indexOf("+") === -1 &&
      expression.indexOf("-") === -1
    )
      return [parseInt(expression)];

    let calculations = [];

    for (let i = 0; i < expression.length; i++)
      if (expression[i] === "*")
        for (const a of recurse(expression.slice(0, i)))
          for (const b of recurse(expression.slice(i + 1)))
            calculations.push(a * b);
      else if (expression[i] === "+")
        for (const a of recurse(expression.slice(0, i)))
          for (const b of recurse(expression.slice(i + 1)))
            calculations.push(a + b);
      else if (expression[i] === "-")
        for (const a of recurse(expression.slice(0, i)))
          for (const b of recurse(expression.slice(i + 1)))
            calculations.push(a - b);

    return calculations;
  }

  return recurse(expression);
};

console.log(diffWaysToCompute("2*3-4*5"));
