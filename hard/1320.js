/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function (word) {
  const coord = {};
  let key = "A";
  let y = 0;
  let x = 0;
  while (key <= "Z") {
    coord[key] = [y, x];
    x++;
    if (x === 6) {
      x = 0;
      y++;
    }
    key = String.fromCharCode(key.charCodeAt() + 1);
  }

  function getDistance(finger, char) {
    const [fy, fx] = finger;
    if (fy === -1 && fx === -1) return 0;

    const [cy, cx] = coord[char];
    return Math.abs(fy - cy) + Math.abs(fx - cx);
  }

  const memo = {};
  function recursion(idx = 0, finger1 = [-1, -1], finger2 = [-1, -1]) {
    if (idx >= word.length) return 0;
    const str = `${idx},${finger1[0]},${finger1[1]},${finger2[0]},${finger2[1]}`;
    if (memo[str] >= 0) return memo[str];

    const char = word[idx];
    const move1 =
      getDistance(finger1, char) + recursion(idx + 1, coord[char], finger2);
    const move2 =
      getDistance(finger2, char) + recursion(idx + 1, finger1, coord[char]);

    const result = Math.min(move1, move2);
    memo[str] = result;
    return result;
  }

  return recursion();
};

console.log(minimumDistance("CAKE"));
