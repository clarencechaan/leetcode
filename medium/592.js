/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  expression = expression.replaceAll("-", "+-");
  if (expression[0] === "+") expression = expression.slice(1);
  expression = expression
    .split("+")
    .map((frac) => frac.split("/").map((num) => +num));

  function reduceFraction([nu, de]) {
    for (let i = 2; i <= Math.max(nu, de); i++)
      while (nu % i === 0 && de % i === 0) [nu, de] = [nu / i, de / i];
    return [nu, de];
  }

  let resultNu = 0;
  let resultDe = 1;

  for (const [nu, de] of expression)
    [resultNu, resultDe] = reduceFraction([
      resultNu * de + nu * resultDe,
      de * resultDe,
    ]);

  return `${resultNu}/${resultDe}`;
};

console.log(fractionAddition("-1/2+1/2"));
