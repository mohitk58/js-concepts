// Event Delegation - Its a technique of handling event on the webpage in a better way. Event Delegation is based upon Event Bubbling.

document.querySelector("#categories").addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

// Pros

/*
    - Saved lot of memory bcoz we have attached a single event handler rather than on each item
    - Writing less codes
    - DOM manipulation
*/

// Cons

/*
    - All the event are not bubbled up (Some event like blur, focus, resizing of the windows, scrolling)
    - If you use stopPropagation() on any child, eventually that won't work
*/
