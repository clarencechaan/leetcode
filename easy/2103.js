/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let rodColours = [];
  for (let i = 0; i < 10; i++) rodColours.push(new Set());

  for (let i = 0; i < rings.length - 1; i += 2)
    rodColours[rings[i + 1]].add(rings[i]);

  return rodColours.filter((colors) => colors.size === 3).length;
};

console.log(countPoints("G4"));
