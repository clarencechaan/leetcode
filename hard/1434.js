/**
 * @param {number[][]} hats
 * @return {number}
 */
var numberWays = function (hats) {
  // idea:
  // 1. for each hat, find the array of people who can wear it
  // 2. create a recursive helper function `recursiveNumberWays(hat, people)`
  //    that returns the number of ways `n` people can wear different hats,
  //    given the set `people` who are already wearing a hat < `hat`

  const n = hats.length;
  const hatToPeople = Array(40)
    .fill()
    .map(() => []);
  for (let i = 0; i < n; i++)
    for (const hat of hats[i]) hatToPeople[hat - 1].push(i);

  const memo = {};
  function recursiveNumberWays(hat = 0, people = new Set()) {
    if (people.size >= n) return 1;
    if (hat >= 40) return 0;
    const str = [hat, ...[...people].sort()].join(",");
    if (memo[str] >= 0) return memo[str];
    let result = recursiveNumberWays(hat + 1, people);
    for (const person of hatToPeople[hat]) {
      if (people.has(person)) continue;
      people.add(person);
      result += recursiveNumberWays(hat + 1, people);
      people.delete(person);
    }
    result %= 10 ** 9 + 7;
    memo[str] = result;
    return result;
  }

  return recursiveNumberWays();
};

console.log(numberWays([[3, 4], [4, 5], [5]]));
