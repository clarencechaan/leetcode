/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let smallest;

  for (const letter of letters)
    if (letter > target && (!smallest || letter < smallest)) smallest = letter;

  return smallest || letters[0];
};

console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
