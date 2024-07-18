/**
 * @param {string} hamsters
 * @return {number}
 */
var minimumBuckets = function (hamsters) {
  // check if impossible
  for (let i = 0; i < hamsters.length; i++)
    if (
      hamsters[i] === "H" &&
      hamsters[i - 1] !== "." &&
      hamsters[i + 1] !== "."
    )
      return -1;

  hamsters = hamsters.replaceAll("H.H", "F").replaceAll("H", "F");

  return hamsters.length - hamsters.replaceAll("F", "").length;
};

console.log(minimumBuckets("H..H"));
