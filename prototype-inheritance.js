// Prototype Inheritance - One object trying to access methods and properties of another object.
// Prototype - It is an object which is attaches to each and every methods to Object, Array, Function etc.

// let arr = ["Mohit", "Kumar"];

let object = {
  name: "Mohit",
  city: "MZN",
  getIntro: function () {
    console.log(this.name + "from" + this.city);
  },
};

let object2 = {
  name: "Kumar",
};

// Never do this

object2.__proto__ = object;

// object2 inherit properties/methods to object

// console.log(arr.__proto__.__proto__.__proto__ === Object.prototype.__proto__);

Function.prototype.mybind = function () {
  console.log("jsbjdbas");
};

function func() {}
