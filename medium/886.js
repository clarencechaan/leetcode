/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  if (!dislikes.length) return true;

  let group1 = new Set([dislikes[0][0]]);
  let group2 = new Set();

  let prevSize1;
  let prevSize2;
  do {
    prevSize1 = group1.size;
    prevSize2 = group2.size;
    for (const [p1, p2] of dislikes) {
      if (
        (group1.has(p1) && group1.has(p2)) ||
        (group2.has(p1) && group2.has(p2))
      )
        return false;
      if (group1.has(p1)) group2.add(p2);
      else if (group1.has(p2)) group2.add(p1);
      else if (group2.has(p1)) group1.add(p2);
      else if (group2.has(p2)) group1.add(p1);
    }
  } while (prevSize1 !== group1.size || prevSize2 !== group2.size);

  let next = [];
  for (const dislike of dislikes)
    if (!group1.has(dislike[0]) && !group2.has(dislike[0])) next.push(dislike);

  return possibleBipartition(n, next);
};

console.log(
  possibleBipartition(4, [
    [1, 2],
    [3, 4],
    [1, 3],
    [1, 4],
  ])
);
