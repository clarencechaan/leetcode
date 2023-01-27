/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let result = 0;

  for (const item of items) {
    let keyIdx;
    switch (ruleKey) {
      case "type":
        keyIdx = 0;
        break;
      case "color":
        keyIdx = 1;
        break;
      case "name":
        keyIdx = 2;
    }

    if (item[keyIdx] === ruleValue) result++;
  }

  return result;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
