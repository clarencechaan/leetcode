/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  let prereqMap = {};
  for (let i = 0; i < numCourses; i++) prereqMap[i] = new Set();
  for (const [a, b] of prerequisites) prereqMap[b].add(a);

  function allPrereqs(n = 0) {
    let prereqs = prereqMap[n];
    for (const child of prereqs) {
      let childPrereqs = prereqMap[child];
      for (const childPrereq of childPrereqs) prereqs.add(childPrereq);
    }
    prereqMap[n] = prereqs;
    return prereqs;
  }

  for (let i = 0; i < numCourses; i++) allPrereqs(i);

  return queries.map(([u, v]) => prereqMap[v].has(u));
};

console.log(
  checkIfPrerequisite(
    2,
    [[1, 0]],
    [
      [0, 1],
      [1, 0],
    ]
  )
);
