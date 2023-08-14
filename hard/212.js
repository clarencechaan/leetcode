/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const m = board[0].length;
  const n = board.length;

  let tree = {};
  for (const word of words) {
    let curr = tree;
    for (const char of word) {
      if (!curr[char]) curr[char] = {};
      curr = curr[char];
    }
    curr.word = word;
  }

  let result = new Set();
  let seen = [];
  for (let i = 0; i < n; i++) seen.push(Array(m).fill(false));

  function recurse(x, y, curr = tree) {
    if (curr.word) result.add(curr.word);
    if (x < 0 || x >= m || y < 0 || y >= n || seen[y][x]) return;
    if (curr[board[y][x]]) {
      seen[y][x] = true;
      recurse(x - 1, y, curr[board[y][x]]);
      recurse(x + 1, y, curr[board[y][x]]);
      recurse(x, y - 1, curr[board[y][x]]);
      recurse(x, y + 1, curr[board[y][x]]);
      seen[y][x] = false;
    }
  }

  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) recurse(j, i);
  return [...result];
};

console.log(
  findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  )
);
