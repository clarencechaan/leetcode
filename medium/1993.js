/**
 * @param {number[]} parent
 */
var LockingTree = function (parent) {
  this.nodesArr = Array(parent.length)
    .fill(-1)
    .map((_, val) => ({
      val,
      lockedBy: null,
      children: [],
    }));

  this.nodesArr.forEach((node) => {
    node.parent = this.nodesArr[parent[node.val]] || null;
    node.parent?.children.push(node);
  });
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.lock = function (num, user) {
  const node = this.nodesArr[num];
  if (!node.lockedBy) {
    node.lockedBy = user;
    return true;
  }
  return false;
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.unlock = function (num, user) {
  const node = this.nodesArr[num];
  if (node.lockedBy === user) {
    node.lockedBy = null;
    return true;
  }
  return false;
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.upgrade = function (num, user) {
  function hasLockedDescendant(node) {
    return (
      node.lockedBy || node.children.some((child) => hasLockedDescendant(child))
    );
  }

  function hasLockedAncestor(node) {
    if (!node) return false;
    return node.lockedBy || hasLockedAncestor(node.parent);
  }

  function unlockDescendants(node) {
    node.lockedBy = null;
    node.children.forEach((child) => unlockDescendants(child));
  }

  const node = this.nodesArr[num];
  if (node.lockedBy) return false;
  if (!hasLockedDescendant(node)) return false;
  if (hasLockedAncestor(node)) return false;

  unlockDescendants(node);
  node.lockedBy = user;
  return true;
};

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */
