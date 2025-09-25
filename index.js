// // const isPalindrome = function (x) {
// //   return x === +x.toString().split("").reverse().join("");
// // };

// // const res = isPalindrome(99);
// // console.log(res);

// // // Trust issues with setTimeout()

// // console.log("Start");

// // setTimeout(function cb() {
// //   console.log("Callback");
// // }, 5000);

// // console.log("End");

// // // 1 million codes

// // let startDate = new Date().getTime();
// // let endDate = startDate;

// // while (endDate < startDate + 10000) {
// //   endDate = new Date().getTime();
// // }

// // console.log("While expires");

// // Higher Order Functions

// // function x() {
// //   console.log("Mohit");
// // }

// // y is higher order function and x is callback functon
// // function y(x) {
// //   x();
// // }

// // example

// // const radius = [3, 1, 2, 4];

// // const area = function (radius) {
// //   return Math.PI * radius * radius;
// // };

// // const cicumference = function (radius) {
// //   return 2 * Math.PI * radius;
// // };

// // const diameter = function (radius) {
// //   return 2 * radius;
// // };

// // Polyfill for map
// // Array.prototype.calculate = function (logic) {
// //   const output = [];

// //   for (let i = 0; i < this.length; i++) {
// //     output.push(logic(this[i]));
// //   }

// //   return output;
// // };

// // sum or max

// // const arr = [2, 5, 6, 4, 8];

// // function findSum(arr) {
// //   let sum = 0;

// //   for (let i = 0; i < arr.length; i++) {
// //     sum = sum + arr[i];
// //   }

// //   return sum;
// // }

// // function findMax(arr) {
// //   let max = 0;

// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > max) {
// //       max = arr[i];
// //     }
// //   }

// //   return max;
// // }

// // const output = arr.reduce((acc, curr) => {
// //   if (curr > acc) {
// //     acc = curr;
// //   }
// //   return acc;
// // }, 0);

// // reduce on objects

// // const users = [
// //   { firstname: "mohit", lastname: "kumar", age: 34 },
// //   { firstname: "chahcha", lastname: "ji", age: 65 },
// //   { firstname: "priti", lastname: "pal", age: 26 },
// //   { firstname: "akshay", lastname: "saini", age: 29 },
// //   { firstname: "john", lastname: "dee", age: 50 },
// //   { firstname: "nitin", lastname: "pal", age: 34 },
// // ];

// // const res = users.reduce(function (acc, curr) {
// //   if (acc[curr.age]) {
// //     acc[curr.age] = ++acc[curr.age];
// //   } else {
// //     acc[curr.age] = 1;
// //   }

// //   return acc;
// // }, {});

// // const output1 = users.filter((x) => x.age < 34).map((i) => i.firstname);

// // console.log(findMax(arr));
// // console.log(output);
// // console.log(findSum(arr));
// // console.log(radius.map(area));
// // console.log(radius.calculate(area));
// // console.log(calculate(radius, cicumference));
// // console.log(calculate(radius, diameter));

// // promises in JS

// // const p1 = new Promise((resolve, reject) => {
// //   // setTimeout(() => resolve("P1 success"), 5000);
// //   setTimeout(() => reject("P1 Fail"), 5000);
// // });

// // const p2 = new Promise((resolve, reject) => {
// //   // setTimeout(() => resolve("P2 success"), 1000);
// //   setTimeout(() => reject("P2 Fail"), 1000);
// // });

// // const p3 = new Promise((resolve, reject) => {
// //   // setTimeout(() => resolve("P3 success"), 2000);
// //   setTimeout(() => reject("P3 Fail"), 2000);
// // });

// // Promise.any([p1, p2, p3])
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((err) => {
// //     console.error(err);
// //     console.log(err.errors);
// //   });

// // new Promise((resolve) => {
// //   console.log(1);
// //   resolve(2);
// // }).then((result) => console.log(result));

// // console.log(3);

// // async/await

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 10000);
// });

// async function handlePromise() {
//   const val = await p;
//   console.log("Hello Mohit!!");
//   console.log(val);

//   const val2 = await p;
//   console.log("Hello Mohit!! 2");
//   console.log(val2);
// }

// handlePromise();

// // function getData() {
// //   // JS Engine will not wait for promise to be resolved
// //   p.then((res) => console.log(res));
// //   console.log("Hello Mohit!!!");
// // }

// // getData();

// // const data = getData();
// // data.then((res) => {
// //   console.log(res);
// // });

// // handlePromise() - moved out of call stack and it will wait p1 to be resolved
// // handlePromise() - JS Engine suspends this function util promise to be resolved (function execution to be suspended and it wait the promises to be resolved)
// // call stack
// // Async - p1, p2

// // fetch example - promise

// const API_URL = "https://api.github.com/users/mohitk58";

// async function getUser() {
//   const user = await fetch(API_URL);
//   const jsonValue = await user.json();

//   // fetch() => Response.json() => jsonValue

//   console.log(jsonValue);
// }

// getUser();

// const p1 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve("P1 success"), 1000);
//   setTimeout(() => reject("P1 Fail"), 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 success"), 2000);
//   // setTimeout(() => reject("P2 Fail"), 1000);
// });

// async function handlePromise() {
//   try {
//     console.log("Hello Mohit!!");

//     const val1 = await p1;
//     console.log("Resolved 1");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("Resolved 2");
//     console.log(val2);
//   } catch (error) {
//     console.log(error);
//   }
// }

// handlePromise();

// // this keyword

// const student = {
//   name: "Mohit",
//   printName: function () {
//     console.log(this.name);
//   },
// };

// student.printName();

// const student2 = {
//   name: "Kumar",
// };

// student.printName.call(student2);

// console.log(this);

// const obj = {
//   x: 10,
//   a: function () {
//     // enclosing lexical context
//     b = () => {
//       console.log(this);
//     };
//     b();
//   },
// };

// obj.a();
