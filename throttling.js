// Throttling - It generally used for the performance optimization or rate limiting the func calls / func execution

const expensive = () => {
  console.log("Expensive");
};

const trottle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = trottle(expensive, 3000);

// window.addEventListener("resize", expensive);

window.addEventListener("resize", betterExpensive);
