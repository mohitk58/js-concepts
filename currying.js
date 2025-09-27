// by bind mehtod

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// by closure

let multiply2 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo2 = multiply2(2);
multiplyByTwo2(4);

multiply2(15)(4);
