/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function (num) {
  let answer1 = Math.floor(Math.sqrt(num + 1));
  while ((num + 1) % answer1 !== 0) answer1--;

  let answer2 = Math.floor(Math.sqrt(num + 2));
  while ((num + 2) % answer2 !== 0) answer2--;

  if (
    Math.abs(answer1 - (num + 1) / answer1) <
    Math.abs(answer2 - (num + 2) / answer2)
  )
    return [answer1, (num + 1) / answer1];
  else return [answer2, (num + 2) / answer2];
};

console.log(closestDivisors(8));
