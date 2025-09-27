// Event Bubbling & Capturing - Event bubbling & capturing are two ways of event propogation in the DOM tree.

// Event Bubbling - bottom to up in the DOM tree
// Event Capturing - upwards down in the DOM tree, It is also known as Event Trickling

addEventListener("click", () => {}, true); // if true - Event Capturing is enabled - top to bottom
addEventListener("click", () => {}, false); // if false - Event Bubbling is enabled - bottom to up (By default)

// example of bubbling & capturing

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked!");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked!");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child clicked!");
  },
  true
);
