/**
 * toutiao 1 mian di 2 ti
 */

function Parent() {
  this.name = "dddddd";
}

function Child() {}

Child.prototype.getName = function() {
  return this.name;
};

function __extends(c, p) {
  const pp = new p();
  c.prototype.name = pp.name;
  console.log(c.prototype);
} // Finish this

__extends(Child, Parent);

const c = new Child();
console.log(c);
console.log(c.getName());
