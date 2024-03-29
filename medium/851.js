/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  // idea:
  // 1. create an array `people` where people[i] is an object of person i, containing the id, quietness,
  //    and the array of people at least as rich as person i
  // 2. create a helper function getLoudestRicherPersonThan(person) that returns the loudest person that is at least as rich as `person`
  // 3. run this function for every person, pushing the result to `answer`

  let people = [];
  for (let i = 0; i < quiet.length; i++)
    people.push({ id: i, quietness: quiet[i], richerPeople: [] });
  for (const [a, b] of richer) people[b].richerPeople.push(people[a]);

  const memo = [];
  function getLoudestRicherThan(person) {
    if (memo[person.id] !== undefined) return memo[person.id];
    let loudest = person;
    for (const richerPerson of person.richerPeople) {
      const richerPersonLoudest = getLoudestRicherThan(richerPerson);
      if (richerPersonLoudest.quietness < loudest.quietness)
        loudest = richerPersonLoudest;
    }
    memo[person.id] = loudest;
    return loudest;
  }

  const answer = [];
  for (const person of people) answer.push(getLoudestRicherThan(person).id);
  return answer;
};

console.log(
  loudAndRich(
    [
      [1, 0],
      [2, 1],
      [3, 1],
      [3, 7],
      [4, 3],
      [5, 3],
      [6, 3],
    ],
    [3, 2, 5, 4, 6, 1, 7, 0]
  )
);
