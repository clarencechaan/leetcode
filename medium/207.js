/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let prereqs = {};
  for (const prereq of prerequisites)
    if (!prereqs[prereq[0]]) prereqs[prereq[0]] = [prereq[1]];
    else prereqs[prereq[0]].push(prereq[1]);

  let finishable = new Set();

  function isCourseFinishable(c) {
    function recurse(c, seen = new Set()) {
      if (!prereqs[c] || finishable.has(c)) return true;
      if (seen.has(c)) return false;

      let result = true;
      for (const p of prereqs[c])
        result = result && recurse(p, new Set(seen).add(c));
      if (result) finishable.add(c);
      return result;
    }

    return recurse(c);
  }

  for (let i = 0; i < numCourses; i++) if (!isCourseFinishable(i)) return false;
  return true;
};
