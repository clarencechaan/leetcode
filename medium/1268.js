/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();

  let result = [];
  let str = "";
  for (let i = 0; i < searchWord.length; i++) {
    result[i] = [];
    str += searchWord[i];
    let idx = products.findIndex((prod) => prod.substring(0, i + 1) === str);
    if (idx >= 0 && products[idx].substring(0, i + 1) === str) {
      result[i].push(products[idx]);
      if (products[idx + 1]?.substring(0, i + 1) === str) {
        result[i].push(products[idx + 1]);
        if (products[idx + 2]?.substring(0, i + 1) === str) {
          result[i].push(products[idx + 2]);
        }
      }
    }
  }

  return result;
};

console.log(
  suggestedProducts(
    ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
    "mouse"
  )
);
