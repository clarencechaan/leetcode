/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  function queryMatches(query, pattern) {
    let i = 0;
    let j = 0;
    while (i < query.length) {
      if (query[i] === pattern[j]) j++;
      else if (query[i] >= "A" && query[i] <= "Z") return false;
      i++;
    }
    return j === pattern.length;
  }

  let result = [];
  for (const query of queries) result.push(queryMatches(query, pattern));
  return result;
};

console.log(
  camelMatch(
    ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
    "FB"
  )
);
