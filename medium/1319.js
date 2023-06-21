/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (n - 1 > connections.length) return -1;

  let networks = new Set();
  loop: for (const [from, to] of connections) {
    let nw1 = null;
    for (const nw of networks)
      if (nw.has(from) || nw.has(to)) {
        nw.add(from).add(to);
        nw1 = nw;
        break;
      }

    if (!nw1) {
      networks.add(new Set([from, to]));
      continue loop;
    }

    for (const nw of networks) {
      if (nw === nw1) continue;
      if (nw.has(from) || nw.has(to)) {
        networks.add(new Set([...nw1, ...nw]));
        networks.delete(nw1);
        networks.delete(nw);
        continue loop;
      }
    }
  }

  let result = n - 1 + networks.size;
  for (const network of networks) result -= network.size;
  return result;
};

console.log(
  makeConnected(
    (n = 4),
    (connections = [
      [0, 1],
      [0, 2],
      [1, 2],
    ])
  )
);
