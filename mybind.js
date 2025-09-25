const person = {
  firstname: "Mohit",
  lastname: "Kumar",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " , " +
      hometown +
      " , " +
      state +
      " , " +
      country
  );
};

let printMyName = printName.bind(person, "Muzaffarnagar", "Uttar Pradesh");
printMyName("India");

// polyfill for bind

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...arg2) {
    obj.apply(args[0], [...params, ...arg2]);
  };
};

let printMyName2 = printName.mybind(person, "Muzaffarnagar", "Uttar Pradesh");
printMyName2("India");
