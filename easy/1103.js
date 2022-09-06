/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
// 1) create array of 0s of size num_people
// 2) loop through array, adding the correct number of candies to give
//  a) calculate amount to give
//  b) add amount to array at cursor (starting at 0)
//  c) subtract amount from candies left
//  c) move cursor to next person
//  d) repeat if candies left > 0
var distributeCandies = function (candies, num_people) {
  const candyDistribution = new Array(num_people).fill(0);
  let candiesLeft = candies;
  let lastGiven = 0;
  let personIdx = 0;

  while (candiesLeft > 0) {
    const amtToGive = lastGiven + 1 <= candiesLeft ? ++lastGiven : candiesLeft;
    candyDistribution[personIdx] += amtToGive;
    candiesLeft -= amtToGive;
    personIdx = personIdx + 1 < num_people ? ++personIdx : 0;
  }

  return candyDistribution;
};

console.log(distributeCandies(10, 3));
