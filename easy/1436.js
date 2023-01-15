/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let dict = {};
  for (const path of paths) dict[path[0]] = path[1];

  let curr = paths[0][0];
  while (dict[curr]) curr = dict[curr];

  return curr;
};

console.log(destCity([["A", "Z"]]));
