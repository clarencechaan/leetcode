/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function (expression) {
  const [leftNumString, rightNumString] = expression.split("+");

  function evaluate(leftParenthesisIdx, rightParenthesisIdx) {
    const factor1 = leftNumString.slice(0, leftParenthesisIdx) || 1;
    const factor2 = rightNumString.slice(rightParenthesisIdx) || 1;
    const sum =
      +leftNumString.slice(leftParenthesisIdx) +
      +rightNumString.slice(0, rightParenthesisIdx);
    return factor1 * sum * factor2;
  }

  let minNum = Infinity;
  let result = "";

  function getExpression(leftParenthesisIdx, rightParenthesisIdx) {
    return (
      leftNumString.slice(0, leftParenthesisIdx) +
      "(" +
      leftNumString.slice(leftParenthesisIdx) +
      "+" +
      rightNumString.slice(0, rightParenthesisIdx) +
      ")" +
      rightNumString.slice(rightParenthesisIdx)
    );
  }

  for (
    let leftParenthesisIdx = 0;
    leftParenthesisIdx < leftNumString.length;
    leftParenthesisIdx++
  ) {
    for (
      let rightParenthesisIdx = 1;
      rightParenthesisIdx <= rightNumString.length;
      rightParenthesisIdx++
    ) {
      const value = evaluate(leftParenthesisIdx, rightParenthesisIdx);
      if (value < minNum) {
        minNum = value;
        result = getExpression(leftParenthesisIdx, rightParenthesisIdx);
      }
    }
  }

  return result;
};

console.log(minimizeResult("247+38"));
