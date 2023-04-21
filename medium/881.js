/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => (a > b ? 1 : -1));

  let boats = 0;

  let i = 0;
  let j = people.length - 1;
  while (i < j) {
    if (people[i] + people[j] <= limit) {
      boats++;
      people[i] = 0;
      people[j] = 0;
      i++;
    }
    j--;
  }

  for (let i = 0; i < people.length; i++) if (people[i]) boats++;

  return boats;
};

console.log(numRescueBoats((people = [3, 5, 3, 4]), (limit = 5)));
