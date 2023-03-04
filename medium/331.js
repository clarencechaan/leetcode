/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  let nodes = preorder.split(",");
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < nodes.length - 2; i++) {
      if (nodes[i] !== "#" && nodes[i + 1] === "#" && nodes[i + 2] === "#") {
        nodes = [...nodes.slice(0, i), "#", ...nodes.slice(i + 3)];
        done = false;
      }
    }
  }

  return nodes.length === 1 && nodes[0] === "#";
};

console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"));
