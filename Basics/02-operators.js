// ========================================
// 02 — OPERATORS IN JAVASCRIPT
// ========================================
// Operators allow us to perform actions on values and variables.
// JS Operators Categories:
// 1) Arithmetic Operators
// 2) Assignment Operators
// 3) Comparison Operators
// 4) Logical Operators
// 5) String Operators
// 6) Ternary Operator
// 7) Type Operators
// 8) Spread & Rest Operators
// 9) Optional Chaining & Nullish Coalescing
// 10) Comma Operator
// ========================================


// ========================================
// 1. ARITHMETIC OPERATORS
// ========================================

let add = 10 + 5;   // 15   Addition
let sub = 10 - 5;   // 5    Subtraction
let mul = 10 * 5;   // 50   Multiplication
let div = 10 / 5;   // 2    Division
let mod = 10 % 3;   // 1    Remainder
let pow = 2 ** 3;   // 8    Exponentiation

// Increment & Decrement
let inc = 5;
inc++;              // 6   (post-increment)

let dec = 5;
dec--;              // 4   (post-decrement)


// ========================================
// 2. ASSIGNMENT OPERATORS
// ========================================

let a = 10;     // simple assignment

a += 5;         // 15   (a = a + 5)
a -= 3;         // 12   (a = a - 3)
a *= 2;         // 24   (a = a * 2)
a /= 4;         // 6    (a = a / 4)
a %= 4;         // 2    (a = a % 4)
a **= 3;        // 8    (a = a ** 3)


// ========================================
// 3. COMPARISON OPERATORS
// ========================================
// Used for checking conditions, always return true/false.


// Loose Equality (checks only VALUE)
10 == "10";     // true → type conversion happens

// Strict Equality (checks VALUE + TYPE)
10 === "10";    // false

// Not Equal
10 != "10";     // false  (values equal)
10 !== "10";    // true   (types not equal)

// Relational
10 > 5;         // true
10 < 5;         // false
10 >= 10;       // true
10 <= 5;        // false


// ========================================
// 4. LOGICAL OPERATORS
// ========================================

true && false;   // false  AND  
true || false;   // true   OR
!true;           // false  NOT

// Logical Operators short-circuit!
// (Left side decides if right side runs)

false && console.log("won’t run");
true || console.log("won’t run");


// ========================================
// 5. STRING OPERATORS
// ========================================

let s1 = "Hello" + " " + "Yogesh";   // "Hello Yogesh"

// Using +=
let s2 = "Hi";
s2 += " there";       // "Hi there"

// Template literal version (preferred now)
let greet = `Hello ${s1}`;


// ========================================
// 6. TERNARY OPERATOR
// ========================================
// Shorthand for if...else (cleaner & compact)

let age = 18;
let type = age >= 18 ? "Adult" : "Minor";
// condition ? value_if_true : value_if_false;


// When to use ternary:
// ✔ Small conditions
// ✔ When code becomes cleaner
// ❌ Avoid nesting multiple ternaries (hard to read)


// ========================================
// 7. TYPE OPERATORS
// ========================================

// typeof → returns type as string
typeof 123;         // "number"
typeof "hi";        // "string"
typeof true;        // "boolean"
typeof {};          // "object"
typeof [];          // "object"
typeof null;        // "object" (JS bug)
typeof undefined;   // "undefined"

// instanceof → checks if object belongs to a class
let arr = [];
arr instanceof Array;    // true


// ========================================
// 8. SPREAD & REST OPERATORS (...)
// ========================================

// Spread → expands elements
let nums = [1, 2, 3];
let copy = [...nums];    // copies array

// Merge arrays
let merged = [...nums, 4, 5];

// Rest → collects remaining values
function sum(...values) {
  return values;
}
sum(1, 2, 3);   // [1,2,3]


// ========================================
// 9. OPTIONAL CHAINING & NULLISH COALESCING
// ========================================

// Optional Chaining (?.)
// Prevents errors when accessing deep properties.

let user = {};
let city = user.address?.city;   // undefined, no error

// Nullish Coalescing (??)
// returns right side only when left side is null/undefined

let data = null;
let result = data ?? "default";   // "default"

// Nullish Assignment (??=)
// assign only if null/undefined

let v = null;
v ??= 100;   // 100


// ========================================
// 10. COMMA OPERATOR
// ========================================
// Evaluates multiple expressions but returns last one.

let p = (1, 2, 3);
console.log(p);   // 3


// ========================================
// END OF OPERATORS SHEET
// ========================================
