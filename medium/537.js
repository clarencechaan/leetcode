/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  let [a, b] = num1.slice(0, -1).split("+");
  let [c, d] = num2.slice(0, -1).split("+");

  const ans1 = a * c - b * d;
  const ans2 = a * d + b * c;

  return `${ans1}+${ans2}i`;
};

console.log(complexNumberMultiply("1+1i", "1+1i"));
