/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
  const [startY, startX] = startPos;

  function numSteps(idx = 0, x = startX, y = startY) {
    if (x < 0 || x >= n || y < 0 || y >= n) return -1;
    if (idx >= s.length) return 0;
    switch (s[idx]) {
      case "R":
        x++;
        break;
      case "D":
        y++;
        break;
      case "L":
        x--;
        break;
      case "U":
        y--;
        break;
    }
    return 1 + numSteps(idx + 1, x, y);
  }

  let result = [];
  for (let idx = 0; idx < s.length; idx++) result[idx] = numSteps(idx);

  return result;
};

console.log(executeInstructions(3, [0, 1], "RRDDLU"));
