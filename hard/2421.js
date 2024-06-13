class DisjSet {
  constructor(n) {
    this.rank = new Array(n).fill(0);
    this.parent = new Array(n);
    this.n = n;
    this.makeSet();
  }

  makeSet() {
    for (let i = 0; i < this.n; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  Union(x, y) {
    let xset = this.find(x);
    let yset = this.find(y);

    if (xset === yset) return;

    if (this.rank[xset] < this.rank[yset]) {
      this.parent[xset] = yset;
    } else if (this.rank[xset] > this.rank[yset]) {
      this.parent[yset] = xset;
    } else {
      this.parent[yset] = xset;
      this.rank[xset] = this.rank[xset] + 1;
    }
  }
}

/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function (vals, edges) {
  const n = vals.length;
  const nodes = [];
  for (let i = 0; i < n; i++)
    nodes.push({ node: i, val: vals[i], neighbours: [] });
  for (const [a, b] of edges) {
    nodes[a].neighbours.push(b);
    nodes[b].neighbours.push(a);
  }

  let nodesByVal = {};
  for (const node of nodes) {
    if (!nodesByVal[node.val]) nodesByVal[node.val] = [];
    nodesByVal[node.val].push(node.node);
  }

  let result = n;

  const ds = new DisjSet(n);
  const seen = new Set();
  for (let val in nodesByVal) {
    val = parseInt(val);
    const valNodes = nodesByVal[val];

    for (const node of valNodes) seen.add(node);
    for (const node of valNodes)
      for (const neighbour of nodes[node].neighbours)
        if (seen.has(neighbour)) ds.Union(node, neighbour);

    let reps = {};
    for (const node of valNodes) {
      const rep = ds.find(node);
      reps[rep] = (reps[rep] || 0) + 1;
    }

    for (const rep in reps) {
      const count = reps[rep];
      result += ((count - 1) * count) / 2;
    }
  }

  return result;
};

console.log(
  numberOfGoodPaths(
    [1, 3, 2, 1, 3],
    [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4],
    ]
  )
);
