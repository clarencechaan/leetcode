/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
  const nodes = Array(n)
    .fill()
    .map((_, val) => ({ val, children: [] }));

  nodes.forEach((node) => {
    node.parent = nodes[parent[node.val]] || null;
    node.parent?.children.push(node);
  });

  function getRows(node = nodes[0], depth = 0, rows = []) {
    node.depth = depth;
    if (!rows[depth]) rows[depth] = [];
    rows[depth].push(node);
    node.children.forEach((child) => getRows(child, depth + 1, rows));
    return rows;
  }

  const rows = getRows();

  this.nodes = nodes;
  this.rows = rows;
};

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
  let curr = this.nodes[node];
  const row = this.rows[curr.depth - k];
  if (!row) return -1;
  if (row.length === 1) return row[0].val;
  for (; k > 0; k--) curr = curr.parent;
  return curr.val;
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
