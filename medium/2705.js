/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    let resultArr = [];
    for (let elem of obj) {
      elem = compactObject(elem);
      if (elem) resultArr.push(elem);
    }
    return resultArr;
  } else if (obj && typeof obj === "object") {
    let resultObj = {};
    for (let prop in obj) {
      let elem = compactObject(obj[prop]);
      if (elem) resultObj[prop] = elem;
    }
    return resultObj;
  } else return obj;
};

console.log(compactObject([null, 0, false, 1]));
