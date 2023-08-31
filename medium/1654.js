/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function (forbidden, a, b, x) {
  let track = Array(6000);
  track[0] = [0, "R"];
  for (const idx of forbidden) track[idx] = null;

  for (let i = 0; i < track.length; i++) {
    if (!track[i]) continue;
    if (x === i) return track[i][0];
    if (
      i + a < track.length &&
      (track[i + a] === undefined || track[i + a]?.[1] === "L")
    )
      track[i + a] = [track[i][0] + 1, "R"];
    if (i - b > 0 && track[i][1] === "R" && track[i - b] === undefined) {
      track[i - b] = [track[i][0] + 1, "L"];
      i = i - b - 1;
    }
  }

  return -1;
};

console.log(minimumJumps([14, 4, 18, 1, 15], 3, 15, 9));
