/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let prereqs = {};
  for (const prereq of prerequisites)
    if (!prereqs[prereq[0]]) prereqs[prereq[0]] = [prereq[1]];
    else prereqs[prereq[0]].push(prereq[1]);

  let finishable = new Set();

  function isCourseFinishable(c) {
    function recurse(c, seen = new Set()) {
      if (finishable.has(c)) return true;
      if (!prereqs[c]) {
        finishable.add(c);
        return true;
      }
      if (seen.has(c)) return false;

      let result = true;
      for (const p of prereqs[c])
        result = result && recurse(p, new Set(seen).add(c));
      if (result) finishable.add(c);
      return result;
    }

    return recurse(c);
  }

  for (let i = 0; i < numCourses; i++) if (!isCourseFinishable(i)) return [];
  return [...finishable];
};

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
