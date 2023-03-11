/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) =>
    a[1] > b[1] ? 1 : a[1] === b[1] ? (a[0] > b[0] ? 1 : -1) : -1
  );

  let result = [people.shift()];

  people.sort((a, b) =>
    a[1] > b[1] ? 1 : a[1] === b[1] ? (a[0] > b[0] ? -1 : 1) : -1
  );

  let infrontIndices = {};
  for (let i = people.length - 1; i >= 0; i--)
    if (!infrontIndices[people[i][1]]) infrontIndices[people[i][1]] = i;

  let k = infrontIndices[result.length] || people.length - 1;
  let tallerOrEqualCount = {};

  while (result.length < people.length + 1) {
    for (let i = k; i >= 0; i--) {
      if (!people[i]) continue;
      let height = people[i][0];
      let infront = people[i][1];
      if (tallerOrEqualCount[height] === undefined)
        tallerOrEqualCount[height] = result.filter(
          (person) => person[0] >= height
        ).length;
      if (tallerOrEqualCount[height] === infront) {
        tallerOrEqualCount = {};
        result.push(people[i]);
        people[i] = null;
        k = infrontIndices[result.length] || k;
        i = k + 1;
      }
    }
  }

  return result;
};

console.log(
  reconstructQueue([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
  ])
);
