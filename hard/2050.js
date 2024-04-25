/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function (n, relations, time) {
  time.unshift(null);

  // create the nodes
  function createNodes() {
    const nodes = [];
    for (let i = 1; i <= n; i++) nodes[i] = { course: i, prereqs: [] };
    for (const [prevCourse, nextCourse] of relations)
      nodes[nextCourse].prereqs.push(prevCourse);
    return nodes;
  }

  // returns the minimum time to complete a course and all its prerequisites
  // marks the time in `nodes`
  function getMinTime(nodes, course) {
    if (nodes[course]?.minTime >= 1) return nodes[course].minTime;
    const courseTime = time[course];
    let total = courseTime;
    for (const prereq of nodes[course].prereqs)
      total = Math.max(total, courseTime + getMinTime(nodes, prereq));
    nodes[course].minTime = total;
    return total;
  }

  const nodes = createNodes();
  let result = 0;
  for (let course = 1; course <= n; course++)
    result = Math.max(result, getMinTime(nodes, course));
  return result;
};

console.log(
  minimumTime(
    3,
    [
      [1, 3],
      [2, 3],
    ],
    [3, 2, 5]
  )
);
