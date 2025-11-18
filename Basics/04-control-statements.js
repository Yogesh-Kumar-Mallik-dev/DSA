// ========================================
// 04 — CONTROL STATEMENTS
// ========================================
// Control statements are used to control the flow of execution.
// JavaScript provides:
// 1) if
// 2) else
// 3) else if
// 4) switch
// ========================================


// ========================================
// 1. IF STATEMENT
// ========================================

let age = 20;

if (age >= 18) {
  console.log("Adult");
}


// ----------------------------------------
// TRUTHY & FALSY CHECKS
// ----------------------------------------
// Falsy values:
// false, 0, "", null, undefined, NaN
//
// Everything else is truthy.

if ("Yogesh") {
  console.log("Truthy"); // runs
}

if (0) {
  console.log("Falsy"); // won't run
}


// ========================================
// 2. IF-ELSE STATEMENT
// ========================================

let marks = 75;

if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}


// ========================================
// 3. ELSE-IF LADDER
// ========================================

let score = 85;

if (score >= 90) {
  console.log("A Grade");
} else if (score >= 75) {
  console.log("B Grade");
} else if (score >= 60) {
  console.log("C Grade");
} else {
  console.log("D Grade");
}


// ========================================
// 4. NESTED IF STATEMENTS
// ========================================

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  console.log("Logged In");

  if (isAdmin) {
    console.log("Welcome Admin");
  } else {
    console.log("Normal User");
  }

} else {
  console.log("Please Login First");
}


// ========================================
// 5. COMPARISON NOTES
// ========================================

// Loose Equality (==) → compares value only
10 == "10"; // true

// Strict Equality (===) → compares value + type
10 === "10"; // false

// Always prefer === (avoids bugs)


// ========================================
// 6. SWITCH STATEMENT
// ========================================
// Used when one value is compared against many cases.

let day = 3;

switch (day) {

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid Day");
    break;
}


// ----------------------------------------
// Important: switch without break
// ----------------------------------------
// If break is missing → fall-through happens.

let num = 2;

switch (num) {
  case 1:
  case 2:
  case 3:
    console.log("Small number");
    break;

  case 4:
  case 5:
    console.log("Medium number");
    break;

  default:
    console.log("Large");
}


// ========================================
// 7. SWITCH — STRICT COMPARISON
// ========================================
// switch uses strict equality (===)

switch ("1") {
  case 1:
    console.log("Won’t run");
    break;

  case "1":
    console.log("Runs");
    break;
}


// ========================================
// 8. TERNARY OPERATOR VS IF-ELSE
// ========================================

let age2 = 17;

// Ternary (shorter)
let result = age2 >= 18 ? "Adult" : "Minor";

// If-else (longer but clearer sometimes)
let result2;

if (age2 >= 18) {
  result2 = "Adult";
} else {
  result2 = "Minor";
}


// ========================================
// 9. COMMON PATTERNS
// ========================================

// (A) Validating user input
let username = "";

if (!username) {
  console.log("Username required");
}

// (B) Checking multiple conditions (AND)
let email = "yogesh@email.com";
let password = "123";

if (email && password) {
  console.log("Form submitted");
}

// (C) OR conditions
let role = "user";

if (role === "admin" || role === "moderator") {
  console.log("Has access");
}


// ========================================
// 10. COMMON MISTAKES
// ========================================

// (A) Using = instead of == or ===
// if (a = 5) → assigns value → always truthy

let x = 0;

// WRONG:
if (x = 5) {
  console.log("This will ALWAYS run"); 
}

// RIGHT:
if (x === 5) {
  console.log("Correct check");
}


// (B) Writing else-if without else (not wrong, but incomplete)
let temp = 30;

if (temp > 40) {
  console.log("Hot");
} else if (temp > 20) {
  console.log("Warm");
}
 // no else → nothing happens when temp <= 20


// ========================================
// END OF CONTROL STATEMENTS SHEET
// ========================================
