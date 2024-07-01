/**
 * @param {number} target
 * @return {number}
 */
var racecar = function (target) {
  const queue = [[0, 1, 0]];

  const seen = Array(target * 2)
    .fill()
    .map(() => new Set());
  for (const [position, speed, count] of queue) {
    if (position === target) return count;

    const p1 = position + speed;
    const s1 = speed * 2;
    const p2 = position;
    const s2 = speed > 0 ? -1 : 1;

    if (seen[p1] && !seen[p1].has(s1)) {
      seen[p1].add(s1);
      queue.push([p1, s1, count + 1]);
    }

    if (seen[p2] && !seen[p2].has(s2)) {
      seen[p2].add(s2);
      queue.push([p2, s2, count + 1]);
    }
  }
};

console.log(racecar(3));
