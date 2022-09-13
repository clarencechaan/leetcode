/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let commonStrings = [];

  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j])
        commonStrings.push({ str: list1[i], indexSum: i + j });
    }
  }

  let min = Infinity;
  for (const obj of commonStrings) {
    if (obj.indexSum < min) min = obj.indexSum;
  }

  return commonStrings.length
    ? commonStrings.filter((obj) => obj.indexSum === min).map((obj) => obj.str)
    : [];
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
);
