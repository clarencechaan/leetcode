/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        const path = findPath(board, word.substring(1), [], j, i);
        if (path.length) {
          console.log(path);
          return true;
        }
      }
    }
  }

  return false;
};

function getNextValidCells(board, visited, x, y, char) {
  let coords = [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ];

  coords = coords.filter(
    (coord) =>
      !visited.some((v) => v[0] === coord[0] && v[1] === coord[1]) &&
      board[coord[1]]?.[coord[0]] === char
  );

  return coords;
}

function findPath(board, word, visited, x, y) {
  const nextValidCells = getNextValidCells(board, visited, x, y, word[0]);

  if (!word.length) return [...visited, [x, y]];
  else if (!nextValidCells.length) return [];
  else {
    let path = [];
    for (const coord of nextValidCells) {
      path = findPath(
        board,
        word.substring(1),
        [...visited, [x, y]],
        coord[0],
        coord[1]
      );

      if (path.length) return path;
    }
    return path;
  }
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
