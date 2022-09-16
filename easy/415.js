/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let sumR = num1
    .split("")
    .map((str) => parseInt(str))
    .reverse();
  let num2R = num2
    .split("")
    .map((str) => parseInt(str))
    .reverse();

  for (let i = 0; i < num2R.length; i++) {
    sumR[i] = sumR[i] ? sumR[i] + num2R[i] : num2R[i];
  }

  for (let i = 0; i < sumR.length; i++) {
    if (sumR[i] >= 10) {
      sumR[i] = sumR[i] - 10;
      if (!sumR[i + 1]) sumR[i + 1] = 0;
      sumR[i + 1]++;
    }
  }

  const sum = sumR.reverse().join("");
  return sum;
};

console.log(addStrings("184", "37"));
