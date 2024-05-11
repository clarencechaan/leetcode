/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
  if (tx < sx || ty < sy) return false;
  if (tx === sx && ty === sy) return true;

  if (tx < ty && ty !== sy) {
    const lower = Math.max(tx, sy);
    const nextY = ty - Math.ceil((ty - lower) / tx) * tx;
    return reachingPoints(sx, sy, tx, nextY);
  }

  if (tx > ty && tx !== sx) {
    const lower = Math.max(ty, sx);
    const nextX = tx - Math.ceil((tx - lower) / ty) * ty;
    return reachingPoints(sx, sy, nextX, ty);
  }

  if (ty === sy) return reachingPoints(sx, sy, tx - ty, ty);
  if (tx === sx) return reachingPoints(sx, sy, tx, ty - tx);

  return false;
};

console.log(reachingPoints(1, 1, 3, 5));
