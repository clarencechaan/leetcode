/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const memo = new Map();

  return function (...inputs) {
    let curr = memo;
    for (const input of inputs) {
      if (!curr.has(input))
        curr.set(input, new Map(Object.entries({ map: new Map() })));
      curr = curr.get(input).get("map");
    }

    if (curr.has("val")) return curr.get("val");
    curr.set("val", fn(...inputs));

    return curr.get("val");
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
