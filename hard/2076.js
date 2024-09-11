/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @param {number[][]} requests
 * @return {boolean[]}
 */
var friendRequests = function (n, restrictions, requests) {
  const groups = Array(n)
    .fill()
    .map((_, idx) => new Set([idx]));

  function canBeFriends(id1, id2) {
    const group1 = groups.find((group) => group.has(id1));
    const group2 = groups.find((group) => group.has(id2));
    if (group1 === group2) return true;
    return !restrictions.some(
      ([r1, r2]) =>
        (group1.has(r1) && group2.has(r2)) || (group1.has(r2) && group2.has(r1))
    );
  }

  function completeRequest(id1, id2) {
    const group1 = groups.find((group) => group.has(id1));
    const group2Idx = groups.findIndex((group) => group.has(id2));
    const group2 = groups[group2Idx];
    if (group1 === group2) return;

    for (const person of group2) group1.add(person);
    groups.splice(group2Idx, 1);
  }

  const result = [];

  for (const [u, v] of requests)
    if (canBeFriends(u, v)) {
      completeRequest(u, v);
      result.push(true);
    } else result.push(false);

  return result;
};

console.log(
  friendRequests(
    3,
    [[0, 1]],
    [
      [0, 2],
      [2, 1],
    ]
  )
);
