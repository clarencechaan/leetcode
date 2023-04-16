/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visited = new Set();

  function visit(room = 0) {
    if (visited.has(room)) return;
    visited.add(room);
    for (const nextRoom of rooms[room]) visit(nextRoom);
  }

  visit();
  return visited.size === rooms.length;
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
