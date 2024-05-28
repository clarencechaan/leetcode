/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function (n, edgeList, queries) {
  queries = queries.map((q, idx) => ({ q, idx }));
  queries.sort((a, b) => (a.q[2] > b.q[2] ? 1 : -1));
  edgeList.sort((a, b) => (a[2] > b[2] ? -1 : 1));

  const ds = new DisjSet(n);

  const ans = [];
  for (const { q, idx } of queries) {
    const [start, end, limit] = q;

    while (edgeList[edgeList.length - 1]?.[2] < limit) {
      const [a, b] = edgeList.pop();
      ds.union(a, b);
    }

    ans[idx] = ds.find(start) === ds.find(end);
  }

  return ans;
};

class DisjSet {
  constructor(n) {
    this.rank = new Array(n);
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

  union(x, y) {
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

console.log(
  distanceLimitedPathsExist(
    3,
    [
      [0, 1, 2],
      [1, 2, 4],
      [2, 0, 8],
      [1, 0, 16],
    ],
    [
      [0, 1, 2],
      [0, 2, 5],
    ]
  )
);
