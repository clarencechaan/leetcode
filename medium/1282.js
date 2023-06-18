/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let map = {};
  for (let i = 0; i < groupSizes.length; i++)
    if (!map[groupSizes[i]]) map[groupSizes[i]] = [i];
    else map[groupSizes[i]].push(i);

  let result = [];
  for (let size in map) {
    size = parseInt(size);
    for (let i = 0; i + size <= map[size].length; i += size)
      result.push(map[size].slice(i, i + size));
  }

  return result;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
