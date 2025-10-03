// Prototype - It is an Object which is attaches to each and every methods, object, array or functions whatever you create in javascript a object to attachs to it.

let arr = ["Mohit", "Rohit"];

arr.__proto__ = Array.prototype;

let object = {
  name: "Mohit",
  city: "MZN",
  getIntro: function () {
    console.log(this.name + " " + "from" + " " + this.city);
  },
};

let object2 = {
  name: "Rohit",
};

// Never do this
object2.__proto__ = object; // object2 inheriting properties of object that is prototype inheritance.

object2.name; // Rohit
object2.city; // MZN
object2.getIntro(); // Rohit from MZN

// object.__proto__ = Object.prototype = object.__proto__.__proto__ = null;

Function.prototype.mybind = function () {
  console.log("something");
};

function x() {}

console.log(x.mybind()); // something
