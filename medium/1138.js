/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
  let coords = {};
  for (let y = 0; y < board.length; y++)
    for (let x = 0; x < board[y].length; x++) coords[board[y][x]] = { x, y };

  let x = 0;
  let y = 0;

  let result = "";
  for (const char of target) {
    let deltaX = coords[char].x - x;
    let deltaY = coords[char].y - y;
    if (y === 5) {
      if (deltaY < 0) result += "U".repeat(-deltaY);
      else if (deltaY > 0) result += "D".repeat(deltaY);
      if (deltaX < 0) result += "L".repeat(-deltaX);
      else if (deltaX > 0) result += "R".repeat(deltaX);
    } else {
      if (deltaX < 0) result += "L".repeat(-deltaX);
      else if (deltaX > 0) result += "R".repeat(deltaX);
      if (deltaY < 0) result += "U".repeat(-deltaY);
      else if (deltaY > 0) result += "D".repeat(deltaY);
    }
    x += deltaX;
    y += deltaY;
    result += "!";
  }

  return result;
};

console.log(alphabetBoardPath("leet"));
