/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const relevant = salary
    .sort((a, b) => (a > b ? 1 : -1))
    .slice(1, salary.length - 1);
  const relevantSum = relevant.reduce((sum, salary) => sum + salary, 0);
  return relevantSum / relevant.length;
};

console.log(average([1000, 2000, 3000]));
