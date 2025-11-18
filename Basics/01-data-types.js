// ========================================
// 01 — DATA TYPES IN JAVASCRIPT
// ========================================

// JavaScript has 8 main data types.
// They are divided into two categories:
// 1) Primitive Data Types
// 2) Non-Primitive (Reference) Data Types

// ========================================
// PRIMITIVE DATA TYPES
// ========================================
// These are stored directly in memory as values.
// They are immutable and compared by value.


// ----------------------------------------
// 1. String
// ----------------------------------------
let name1 = "Yogesh";        // double quotes
let name2 = 'Yogesh';        // single quotes
let name3 = `Yogesh`;        // backticks (template literals)

// Multi-line string (only with backticks)
let multi = `
This is 
a multi-line
string
`;


// ----------------------------------------
// 2. Number
// ----------------------------------------
let age = 20;        // integer
let price = 99.99;   // float

// All numbers in JS are 64-bit floating point.
// No separate int / float type.


// ----------------------------------------
// 3. Boolean
// ----------------------------------------
let isStudent = true;
let isLoggedIn = false;

// In boolean context:
// 1 → true
// 0 → false
// "" → false
// "text" → true
// null → false
// undefined → false


// ----------------------------------------
// 4. Undefined
// ----------------------------------------
let city;
console.log(city);    // undefined (variable declared but not assigned)


// ----------------------------------------
// 5. Null
// ----------------------------------------
let details = null;
// null = intentionally empty value given by programmer.


// ----------------------------------------
// 6. BigInt
// ----------------------------------------
// Used for numbers bigger than Number limit.
let big = 12345678901234567890n;


// ----------------------------------------
// 7. Symbol
// ----------------------------------------
// Used for unique identifiers (mostly in advanced JS).
let s1 = Symbol("id");
let s2 = Symbol("id");
// s1 !== s2  (Symbol values are always unique)


// ========================================
// NON-PRIMITIVE (REFERENCE) DATA TYPES
// ========================================
// These store references to memory, not actual values.


// ----------------------------------------
// 8. Object
// ----------------------------------------
let user = {
  name: "Yogesh",
  age: 20,
  isStudent: true
};


// ----------------------------------------
// Array (technically also an object)
// ----------------------------------------
let skills = ["HTML", "CSS", "JS"];


// ----------------------------------------
// Function (also a type of object)
// ----------------------------------------
function greet() {
  console.log("Hello");
}


// ----------------------------------------
// typeof Operator
// ----------------------------------------
console.log(typeof "Yogesh");     // "string"
console.log(typeof 20);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (bug in JS)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof greet);        // "function"


// ========================================
// IMPORTANT NOTES
// ========================================

// (1) null is NOT "nothing" in technical sense.
// It’s an assigned empty value.

// (2) typeof null === "object"
// This is a 25-year-old JavaScript bug.

// (3) Arrays, Functions are all objects.

// (4) Primitive types are compared by VALUE.
// Non-primitive are compared by REFERENCE.

let a = [1,2];
let b = [1,2];
console.log(a === b);   // false (different memory reference)

let c = a;
console.log(a === c);   // true (same memory reference)


// ========================================
// END OF DATA TYPES SHEET
// ========================================
