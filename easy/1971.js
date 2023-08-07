/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let seen = [source];

  function recurse(n, edges, source, destination) {
    let next = edges.filter((edge) => edge.includes(source));
    next = next.map((edge) => (edge[0] === source ? edge[1] : edge[0]));
    next = next.filter((node) => !seen.includes(node));
    seen = [...seen, ...next];
    const remaining = edges.filter((edge) => !edge.includes(source));

    if (next.includes(destination) || source === destination) return true;
    else if (!next.length) return false;
    else
      return next.some((node) => recurse(n - 1, remaining, node, destination));
  }

  return recurse(n, edges, source, destination);
};
