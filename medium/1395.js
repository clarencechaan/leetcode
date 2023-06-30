/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  let result = 0;

  let greaterThanCount = Array(rating.length).fill(0);
  let lessThanCount = Array(rating.length).fill(0);

  for (let i = 0; i < rating.length; i++)
    for (let j = i + 1; j < rating.length; j++)
      if (rating[j] > rating[i]) greaterThanCount[i]++;
      else if (rating[j] < rating[i]) lessThanCount[i]++;

  for (let i = 0; i < rating.length; i++)
    for (let j = i + 1; j < rating.length; j++)
      if (rating[i] < rating[j]) result += greaterThanCount[j];
      else if (rating[i] > rating[j]) result += lessThanCount[j];

  return result;
};

console.log(numTeams([2, 5, 3, 4, 1]));
