/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function (rooms, queries) {
  rooms.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  queries = queries.map((query, idx) => [...query, idx]);
  queries.sort((a, b) => (a[1] > b[1] ? 1 : -1));

  // valid rooms sorted by id (ascending)
  const validRooms = [];

  function binarySearchInsert(validRooms, id) {
    let min = 0;
    let max = validRooms.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (validRooms[mid][0] > id) max = mid;
      else if (validRooms[mid][0] < id) min = mid + 1;
      else break;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  function binarySearchBestRoom(validRooms, id) {
    let min = 0;
    let max = validRooms.length - 1;
    let mid = Math.floor((min + max) / 2);
    while (min + 1 < max) {
      if (validRooms[mid][0] > id) max = mid;
      else if (validRooms[mid][0] <= id) min = mid;
      mid = Math.floor((min + max) / 2);
    }
    if (Math.abs(validRooms[min][0] - id) <= Math.abs(validRooms[max][0] - id))
      return min;
    return max;
  }

  const ans = [];
  while (queries.length) {
    const query = queries.pop();
    while (rooms[rooms.length - 1]?.[1] >= query[1]) {
      const room = rooms.pop();
      const insertIdx = binarySearchInsert(validRooms, room[0]);
      validRooms.splice(insertIdx, 0, room);
    }
    if (!validRooms.length) ans[query[2]] = -1;
    else {
      const bestRoomIdx = binarySearchBestRoom(validRooms, query[0]);
      ans[query[2]] = validRooms[bestRoomIdx][0];
    }
  }

  return ans;
};

console.log(
  closestRoom(
    [
      [2, 2],
      [1, 2],
      [3, 2],
    ],
    [
      [3, 1],
      [3, 3],
      [5, 2],
    ]
  )
);
