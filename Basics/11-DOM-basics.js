// ========================================
// 11 — DOM BASICS IN JAVASCRIPT
// ========================================
// DOM = Document Object Model
// It represents the entire HTML page as a tree of nodes.
//
// Using the DOM, JavaScript can:
// - Select HTML elements
// - Change content
// - Change styles
// - Change attributes
// - Create / Remove elements
// - Traverse the tree
// ========================================


// ========================================
// 1. SELECTING ELEMENTS
// ========================================

// ----------------------------------------
// getElementById()
let title = document.getElementById("title");

// ----------------------------------------
// getElementsByClassName() (HTMLCollection)
let items = document.getElementsByClassName("item");

// ----------------------------------------
// getElementsByTagName()
let paras = document.getElementsByTagName("p");

// ----------------------------------------
// querySelector() → first match
let firstItem = document.querySelector(".item");

// ----------------------------------------
// querySelectorAll() → NodeList (can use forEach)
let allItems = document.querySelectorAll(".item");


// ========================================
// 2. CHANGING CONTENT
// ========================================

let heading = document.getElementById("title");

// ----------------------------------------
// textContent (recommended)
heading.textContent = "Updated Title";

// ----------------------------------------
// innerText (reads styles — slower)
heading.innerText = "New Title";

// ----------------------------------------
// innerHTML (can insert HTML)
heading.innerHTML = "<u>Underlined Title</u>";


// ========================================
// 3. CHANGING STYLES
// ========================================

let box = document.getElementById("box");

box.style.color = "red";
box.style.backgroundColor = "black";
box.style.fontSize = "30px";
box.style.padding = "20px";


// ========================================
// 4. CHANGING ATTRIBUTES
// ========================================

let img = document.getElementById("image");

// ----------------------------------------
// setAttribute()
img.setAttribute("src", "photo.png");
img.setAttribute("alt", "Profile Photo");

// ----------------------------------------
// getAttribute()
let altText = img.getAttribute("alt");

// ----------------------------------------
// removeAttribute()
img.removeAttribute("alt");


// ========================================
// 5. CLASS LIST MANIPULATION
// ========================================

let btn = document.getElementById("btn");

// add class
btn.classList.add("active");

// remove class
btn.classList.remove("active");

// toggle class
btn.classList.toggle("active");

// check class
btn.classList.contains("active");


// ========================================
// 6. CREATE / APPEND / REMOVE ELEMENTS
// ========================================

// ----------------------------------------
// Create element
let div = document.createElement("div");
div.textContent = "Hello, I'm a new div";

// ----------------------------------------
// Append to body
document.body.appendChild(div);

// ----------------------------------------
// Prepend to top of container
let container = document.getElementById("container");
container.prepend(div);

// ----------------------------------------
// Insert before specific node
let parent = document.getElementById("list");
let item2 = document.getElementById("item2");
parent.insertBefore(div, item2);

// ----------------------------------------
// Remove element
div.remove();

// ----------------------------------------
// Older method
parent.removeChild(item2);


// ========================================
// 7. DOM TRAVERSAL
// ========================================

let element = document.getElementById("list");

// Parent
element.parentElement;

// Children
element.children;         // HTMLCollection
element.childNodes;       // includes text nodes

// First & last
element.firstElementChild;
element.lastElementChild;

// Siblings
element.nextElementSibling;
element.previousElementSibling;


// ========================================
// 8. INPUT VALUE ACCESS
// ========================================

let inp = document.getElementById("username");

// Get value
let val = inp.value;

// Set value
inp.value = "Yogesh";

// Check if empty
if (!inp.value) {
  console.log("Input is empty");
}


// ========================================
// 9. INNERHTML vs TEXTCONTENT
// ========================================

let box2 = document.getElementById("box2");

// textContent → prints as plain text
box2.textContent = "<b>Hello</b>";

// innerHTML → renders as HTML
box2.innerHTML = "<b>Hello</b>";


// ========================================
// 10. NODE TYPES (useful for debugging)
// ========================================

/*
1 = ELEMENT_NODE
3 = TEXT_NODE
8 = COMMENT_NODE
9 = DOCUMENT_NODE
*/

let node = document.getElementById("title");
node.nodeType; // 1


// ========================================
// 11. GET BOUNDING RECTANGLE
// (Useful for game dev, animations)
// ========================================

let rect = element.getBoundingClientRect();

rect.top;
rect.left;
rect.width;
rect.height;


// ========================================
// 12. SCROLL METHODS
// ========================================

window.scrollTo(0, 500);    // jump
window.scrollBy(0, 200);    // relative scroll

// Smooth scroll
window.scrollTo({
  top: 600,
  behavior: "smooth"
});


// ========================================
// END OF DOM BASICS SHEET
// ========================================
