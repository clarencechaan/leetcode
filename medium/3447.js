/**
 * @param {number[]} groups
 * @param {number[]} elements
 * @return {number[]}
 */
var assignElements = function (groups, elements) {
  const indexMap = [];
  const seen = new Set();

  for (let i = 0; i < elements.length; i++) {
    const elem = elements[i];
    if (seen.has(elem)) continue;
    seen.add(elem);

    let num = elem;
    while (num <= 100000) {
      if (indexMap[num] === undefined) indexMap[num] = i;
      num += elem;
    }
  }

  return groups.map((group) => indexMap[group] ?? -1);
};
