/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  const projects = [];
  for (let i = 0; i < profits.length; i++)
    projects[i] = { p: profits[i], c: capital[i] };

  // need to figure out how to quickly find the best project given any worth
  // value. i.e., given `worth` find the project `project` such that
  // `project.c >= worth` and `project.p` is maximized

  const doable = [];
  const sortedByC = projects.sort((a, b) => (a.c > b.c ? -1 : 1));

  function binarySearch(p, doable) {
    let min = 0;
    let max = doable.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (doable[mid].p >= p) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  let worth = w;
  for (let i = 0; i < k; i++) {
    while (sortedByC[sortedByC.length - 1]?.c <= worth) {
      const project = sortedByC.pop();
      const idx = binarySearch(project.p, doable);
      doable.splice(idx, 0, project);
    }
    if (!doable.length) break;
    worth += doable.pop().p;
  }

  return worth;
};

console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]));
