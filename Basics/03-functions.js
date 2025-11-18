// ========================================
// 03 — FUNCTIONS IN JAVASCRIPT
// ========================================
// Functions are blocks of code designed to perform tasks.
// They make code reusable, modular, and cleaner.
//
// JavaScript has multiple ways to create functions:
// 1) Function Declaration
// 2) Function Expression
// 3) Arrow Function
// 4) Anonymous Function
// 5) Callback Functions
//
// ========================================


// ========================================
// 1. FUNCTION DECLARATION
// ========================================

function greet() {
  console.log("Hello");
}

greet(); // calling the function


// Parameterized Function
function greetUser(name) {
  console.log("Hello " + name);
}

greetUser("Yogesh");


// Function with Return
function add(a, b) {
  return a + b;
}

let ans = add(10, 20);
console.log(ans); // 30


// NOTE:
// A function stops executing after `return`.
// Any code after return will NOT run.


// ========================================
// 2. FUNCTION EXPRESSION
// ========================================
// Function stored inside a variable.

const mul = function(a, b) {
  return a * b;
};

console.log(mul(3, 5)); // 15


// WHY USE FUNCTION EXPRESSIONS?
// - Useful in callbacks
// - Useful when passing as arguments
// - Helps maintain clean code structure


// ========================================
// 3. ARROW FUNCTIONS (ES6)
// ========================================
// Shorter, cleaner syntax for functions.


// Simple Arrow Function
const add2 = (a, b) => a + b;


// Arrow Function with Multiple Lines
const greet2 = (name) => {
  console.log("Hello " + name);
};


// Arrow Function with One Parameter
const square = num => num * num;


// Arrow Function Returning Object
const getUser = () => ({
  name: "Yogesh",
  age: 20
});


// IMPORTANT NOTES ABOUT ARROW FUNCTIONS:
// (1) They do NOT have their own "this"
// (2) They cannot be used as constructors
// (3) They do not have 'arguments' object
// (4) Best for callbacks, event handlers


// ========================================
// 4. ANONYMOUS FUNCTIONS
// ========================================
// A function without a name.
// Mostly used as callbacks.


// Normal anonymous function
setTimeout(function() {
  console.log("Hello after 1 second");
}, 1000);


// Arrow version
setTimeout(() => {
  console.log("Arrow style timeout");
}, 1500);


// ========================================
// 5. CALLBACK FUNCTIONS
// ========================================
// When a function is passed as an argument to another function.

function printValue(fn) {
  fn("Yogesh");
}

printValue(name => console.log("Name:", name));


// Real-Life Use:
// - Event listeners
// - setTimeout, setInterval
// - Array methods: map, filter, reduce


// Example with Array.map
let arr = [1, 2, 3];
let doubled = arr.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


// ========================================
// 6. DEFAULT PARAMETERS
// ========================================
function welcome(name = "Guest") {
  console.log("Welcome", name);
}

welcome();          // "Welcome Guest"
welcome("Yogesh");  // "Welcome Yogesh"


// ========================================
// 7. REST PARAMETERS (...)
// ========================================
// Takes unlimited arguments as array.

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


// ========================================
// 8. RETURN RULES & PITFALLS
// ========================================

// (A) RETURNING MULTIPLE VALUES USING ARRAYS
function values() {
  return [1, 2, 3];
}

let [x, y, z] = values();


// (B) AUTO-RETURN ONLY WORKS IN ONE-LINE ARROW FUNCTIONS
const badExample = () => { message: "Hi" };
// This returns NOTHING, not an object.

const correctExample = () => ({ message: "Hi" });


// (C) Missing return
function noReturn(a, b) {
  a + b;  // no return → undefined
}


// ========================================
// 9. IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// (Not needed now, but included for completeness)
// ========================================

(function () {
  console.log("IIFE executed automatically");
})();


// Arrow IIFE
(() => {
  console.log("Arrow IIFE executed");
})();


// ========================================
// 10. FUNCTION HOISTING
// ========================================
// Function declarations are hoisted → can be used before defined.

hello(); // works

function hello() {
  console.log("Hi");
}

// Function expressions are NOT hoisted.

try {
  hey(); // ❌ ERROR
} catch (e) {
  console.log("Function Expression NOT hoisted");
}

const hey = function() {
  console.log("Hey there");
};


// ========================================
// END OF FUNCTIONS SHEET
// ========================================
