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
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestMissingValueSubtree = function (parents, nums) {
  const nodes = [];
  for (let i = 0; i < parents.length; i++)
    nodes[i] = { idx: i, num: nums[i], parent: null, children: [] };
  for (let i = 0; i < parents.length; i++) {
    if (parents[i] === -1) continue;
    nodes[i].parent = parents[i];
    nodes[parents[i]].children.push(i);
  }

  const numToNode = {};
  for (let node = 0; node < nums.length; node++) numToNode[nums[node]] = node;

  const ds = new DisjSet(parents.length);

  const nodesAtDepth = [];
  (function markDepth(node = parents.indexOf(-1), depth = 0) {
    if (!nodesAtDepth[depth]) nodesAtDepth[depth] = [];
    nodesAtDepth[depth].push(node);
    for (const child of nodes[node].children) markDepth(child, depth + 1);
  })();

  const ans = [];

  for (let depth = nodesAtDepth.length - 1; depth >= 0; depth--) {
    const row = nodesAtDepth[depth];
    for (const node of row)
      for (const child of nodes[node].children) ds.Union(node, child);

    for (const node of row) getMissing(node);
  }

  function getMissing(node) {
    if (ans[node] >= 0) return ans[node];

    let missing = 1;
    for (const child of nodes[node].children)
      missing = Math.max(missing, getMissing(child));

    const rep = ds.find(node);
    while (ds.find(numToNode[missing]) === rep) missing++;

    ans[node] = missing;
    return missing;
  }

  return ans;
};

console.log(smallestMissingValueSubtree([-1, 0, 0, 2], [1, 2, 3, 4]));
