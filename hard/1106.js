/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  if (expression === "t") return true;
  else if (expression === "f") return false;

  function splitSubExprs() {
    let level = 0;
    let arr = [""];
    for (let i = 2; i < expression.length - 1; i++) {
      if (level === 0 && expression[i] === ",") arr.push("");
      else arr[arr.length - 1] += expression[i];
      if (expression[i] === "(") level++;
      else if (expression[i] === ")") level--;
    }
    return arr;
  }

  const operator = expression[0];
  switch (operator) {
    case "!":
      return !parseBoolExpr(expression.slice(2, -1));
    case "&":
      return splitSubExprs().every((subExpr) => parseBoolExpr(subExpr));
    case "|":
      return splitSubExprs().some((subExpr) => parseBoolExpr(subExpr));
  }
};

console.log(parseBoolExpr("&(|(f))"));
