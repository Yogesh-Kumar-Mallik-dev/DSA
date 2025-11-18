// ========================================
// 12 — DOM EVENTS IN JAVASCRIPT
// ========================================
// Events = actions that happen on a webpage:
// - click
// - keypress
// - mouseover
// - submit
// - input
// - scroll
//
// JS can "listen" for these events and run functions.
// ========================================


// ========================================
// 1. ADD EVENT LISTENER (MOST IMPORTANT)
// ========================================

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Using arrow function
btn.addEventListener("click", () => {
  console.log("Clicked via arrow function");
});


// ========================================
// 2. COMMON MOUSE EVENTS
// ========================================

let box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  console.log("Mouse entered box");
});

box.addEventListener("mouseout", () => {
  console.log("Mouse left box");
});

box.addEventListener("mousemove", (e) => {
  console.log("Mouse moving:", e.clientX, e.clientY);
});


// ========================================
// 3. KEYBOARD EVENTS
// ========================================
// keydown → when key is pressed
// keyup   → when key is released
// keypress → older and not recommended

document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});

document.addEventListener("keyup", (event) => {
  console.log("Released:", event.key);
});


// ========================================
// 4. INPUT & CHANGE EVENTS (FOR FORMS)
// ========================================

let inp = document.getElementById("username");

// Fires every time user types
inp.addEventListener("input", () => {
  console.log("Current value:", inp.value);
});

// Fires when user leaves the input or commits final value
inp.addEventListener("change", () => {
  console.log("Final value:", inp.value);
});


// ========================================
// 5. FORM SUBMISSION
// ========================================

let form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stops page refresh
  console.log("Form submitted");
});


// ========================================
// 6. CLICK EVENT WITH MULTIPLE ELEMENTS
// ========================================

let items = document.querySelectorAll(".item");

items.forEach(item => {
  item.addEventListener("click", () => {
    console.log("Clicked:", item.textContent);
  });
});


// ========================================
// 7. EVENT OBJECT (VERY IMPORTANT)
// ========================================

btn.addEventListener("click", function (event) {
  console.log("Event details:", event);

  console.log("Target:", event.target);
  console.log("Type:", event.type);
});


// ========================================
// 8. EVENT BUBBLING & CAPTURING
// ========================================
// Default behavior: bubbling (child → parent)

let outer = document.getElementById("outer");
let inner = document.getElementById("inner");

outer.addEventListener("click", () => {
  console.log("Outer clicked");
});

inner.addEventListener("click", () => {
  console.log("Inner clicked");
});

// Clicking inner prints:
// "Inner clicked"
// "Outer clicked"


// ----------------------------------------
// Capture mode (parent → child)
outer.addEventListener("click", () => {
  console.log("Outer capture");
}, true); // capture mode enabled


// ========================================
// 9. STOP PROPAGATION
// ========================================

inner.addEventListener("click", (e) => {
  e.stopPropagation();  // stops bubbling
  console.log("Inner only");
});


// ========================================
// 10. PREVENT DEFAULT
// ========================================
// Stops default behavior (links, forms, etc.)

let link = document.getElementById("google");

link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link click blocked");
});


// ========================================
// 11. REMOVE EVENT LISTENER
// ========================================

function sayHello() {
  console.log("Hello!");
}

btn.addEventListener("click", sayHello);

// remove after 3 seconds
setTimeout(() => {
  btn.removeEventListener("click", sayHello);
  console.log("Listener removed");
}, 3000);


// ========================================
// 12. DELEGATED EVENTS (Very Important)
// ========================================
// Instead of adding event to 100 items,
// attach it to parent and detect target.

let list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    console.log("Clicked item =", e.target.textContent);
  }
});

// Useful when dynamically adding elements.


// ========================================
// 13. WINDOW EVENTS
// ========================================

// Scroll event
window.addEventListener("scroll", () => {
  console.log("Scrolling...");
});

// Resize event
window.addEventListener("resize", () => {
  console.log("Window resized");
});


// ========================================
// 14. LOADED EVENTS
// ========================================

// DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
});

// Page fully loaded including images
window.addEventListener("load", () => {
  console.log("Everything loaded");
});


// ========================================
// END OF DOM EVENTS SHEET
// ========================================
