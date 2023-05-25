/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.changes = {};
  this.snapshots = [];
  for (let i = 0; i < length; i++) this.snapshots.push([]);
  this.snap_id = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.changes[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  for (const idx in this.changes)
    this.snapshots[parseInt(idx)].push({
      snap_id: this.snap_id,
      val: this.changes[idx],
    });
  this.changes = {};
  this.snap_id++;
  return this.snap_id - 1;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  let result = 0;
  for (const snap of this.snapshots[index])
    if (snap.snap_id > snap_id) break;
    else result = snap.val;
  return result;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
