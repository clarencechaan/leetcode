/**
 * @param {string} kingName
 */
var ThroneInheritance = function (kingName) {
  const king = { name: kingName, isDead: false, children: [] };
  const people = { [kingName]: king };

  this.tree = king;
  this.people = people;
};

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function (parentName, childName) {
  const parent = this.people[parentName];
  const child = { name: childName, isDead: false, children: [] };
  parent.children.push(childName);
  this.people[childName] = child;
};

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function (name) {
  const person = this.people[name];
  person.isDead = true;
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function () {
  const tree = this.tree;
  const people = this.people;

  function getOrder(name = tree.name, order = []) {
    const person = people[name];
    const children = person.children;
    if (!person.isDead) order.push(name);

    for (const child of children) getOrder(child, order);

    return order;
  }

  return getOrder();
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
