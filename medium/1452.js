/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function (favoriteCompanies) {
  favoriteCompanies = favoriteCompanies.map((arr) => new Set(arr));

  function isSubset(a, b) {
    if (a.size > b.size) return false;
    for (const elem of a) if (!b.has(elem)) return false;
    return true;
  }

  let subsetIndices = new Set();
  for (let i = 0; i < favoriteCompanies.length; i++)
    for (let j = 0; j < favoriteCompanies.length; j++)
      if (
        i !== j &&
        !subsetIndices.has(j) &&
        isSubset(favoriteCompanies[j], favoriteCompanies[i])
      )
        subsetIndices.add(j);

  let result = [];
  for (let i = 0; i < favoriteCompanies.length; i++)
    if (!subsetIndices.has(i)) result.push(i);
  return result;
};

console.log(
  peopleIndexes([
    ["leetcode", "google", "facebook"],
    ["google", "microsoft"],
    ["google", "facebook"],
    ["google"],
    ["amazon"],
  ])
);
