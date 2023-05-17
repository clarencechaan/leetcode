/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let satisfiedBeforeTrick = 0;
  let runningUnsatisfied = [0];
  let sum = 0;
  for (let i = 0; i < customers.length; i++) {
    if (!grumpy[i]) satisfiedBeforeTrick += customers[i];
    else sum += customers[i];
    runningUnsatisfied.push(sum);
  }

  let maxChange = 0;
  for (let i = minutes; i < runningUnsatisfied.length; i++)
    maxChange = Math.max(
      maxChange,
      runningUnsatisfied[i] - runningUnsatisfied[i - minutes]
    );

  return satisfiedBeforeTrick + maxChange;
};

console.log(maxSatisfied([8, 8], [1, 0], 2));
