/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let arr1 = num1
    .split("")
    .map((char) => parseInt(char))
    .reverse();
  let arr2 = num2
    .split("")
    .map((char) => parseInt(char))
    .reverse();

  let products = [];
  let zeroCount = 0;
  for (const b of arr2) {
    let product = Array(zeroCount).fill(0);

    for (const a of arr1) {
      product.push(a * b);
    }

    for (let i = 0; i < product.length; i++) {
      if (product[i] > 9) {
        product[i + 1] = (product[i + 1] || 0) + Math.floor(product[i] / 10);
        product[i] %= 10;
      }
    }

    products.push(product);
    zeroCount++;
  }

  let result = [];
  for (const product of products) {
    for (let i = 0; i < product.length; i++)
      result[i] = (result[i] || 0) + product[i];
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] > 9) {
      result[i + 1] = (result[i + 1] || 0) + Math.floor(result[i] / 10);
      result[i] %= 10;
    }
  }

  while (result.length > 1 && !result[result.length - 1]) result.pop();

  result = result.reverse().join("");
  return result;
};

console.log(multiply("9133", "0"));
