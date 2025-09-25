// call, apply & bind methods

let name = {
  firstname: "Mohit",
  lastname: "Kumar",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " , " + hometown + " , " + state
  );
};

printFullName.call(name, "MZN", "UP");

let name2 = {
  firstname: "Abhishek",
  lastname: "Sharma",
};

// function borrowing
printFullName.call(name2, "Mohli", "Punjab");

printFullName.apply(name2, ["Mohli", "Punjab"]);

// bind method
let printMyName = printFullName.bind(name, "MZN", "UP");
console.log(printMyName());
