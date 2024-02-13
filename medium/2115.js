/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  supplies = new Set(supplies);

  let ingredientMap = {};
  for (let i = 0; i < recipes.length; i++) {
    ingredientMap[recipes[i]] = [];
    for (const ingredient of ingredients[i])
      ingredientMap[recipes[i]].push(ingredient);
  }

  let memo = {};
  let seen = new Set();
  function canMake(item) {
    if (supplies.has(item)) return true;
    if (memo[item] !== undefined) return memo[item];
    if (!ingredientMap[item] || seen.has(item)) return false;
    seen.add(item);
    let result = ingredientMap[item].every((ingredient) => canMake(ingredient));
    memo[item] = result;
    return result;
  }

  let result = recipes.filter((item) => canMake(item));
  return result;
};

console.log(
  findAllRecipes(["bread"], [["yeast", "flour"]], ["yeast", "flour", "corn"])
);
