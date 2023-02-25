/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let heightsSorted = heights
    .map((val, idx) => ({ val, idx }))
    .sort((a, b) => (a.val > b.val ? -1 : 1));

  let result = [];
  for (const { idx } of heightsSorted) result.push(names[idx]);
  return result;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
