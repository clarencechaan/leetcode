/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function (n, goal, k) {
  const memo = Array(goal)
    .fill()
    .map(() => []);
  function recursion(songsPlayed = 0, uniqueSongsPlayed = 0) {
    // we've played our goal number of songs
    // return 1 if we've played every song
    // return 0 if we haven't played every song
    if (songsPlayed === goal) return +(uniqueSongsPlayed === n);

    if (memo[songsPlayed][uniqueSongsPlayed] !== undefined)
      return memo[songsPlayed][uniqueSongsPlayed];

    // play1: play unplayed song
    const unplayedSongs = n - uniqueSongsPlayed;
    const play1 =
      unplayedSongs * recursion(songsPlayed + 1, uniqueSongsPlayed + 1);

    // play2: replay song
    // but how many of our previously played songs are now playable?
    // we have to look at the last k songs; any song in the last k (or `songsPlayed`, whichever is lower)
    // songs are guaranteed to be unique, and we cannot play any of them
    // so number of previously played songs that are playable is `uniqueSongsPlayed - k`
    const replayableSongs = uniqueSongsPlayed - Math.min(songsPlayed, k);
    const play2 =
      replayableSongs * recursion(songsPlayed + 1, uniqueSongsPlayed);

    const modded = (play1 + play2) % (10 ** 9 + 7);
    memo[songsPlayed][uniqueSongsPlayed] = modded;
    return modded;
  }

  return recursion();
};

// have to play every song
console.log(numMusicPlaylists(3, 3, 1));
