// ========================================
// 10 — MATH METHODS IN JAVASCRIPT
// ========================================
// Math is a built-in object that provides
// mathematical constants & functions.
//
// Math is NOT a constructor.
// You cannot do: new Math()
// You access methods directly: Math.method()
// ========================================


// SAMPLE NUMBERS
let x = 4.7;
let y = 4.3;


// ========================================
// 1. ROUNDING METHODS
// ========================================

// ----------------------------------------
// Math.round() → rounds to nearest integer
Math.round(4.6);  // 5
Math.round(4.4);  // 4

// ----------------------------------------
// Math.floor() → round DOWN
Math.floor(4.9);  // 4
Math.floor(-4.1); // -5 (downward)

// ----------------------------------------
// Math.ceil() → round UP
Math.ceil(4.1);   // 5
Math.ceil(-4.1);  // -4 (upward)

// ----------------------------------------
// Math.trunc() → remove decimal (no rounding)
Math.trunc(4.9);  // 4
Math.trunc(-4.9); // -4


// ========================================
// 2. MAX & MIN
// ========================================

Math.max(1, 5, 3);   // 5
Math.min(1, 5, 3);   // 1

// With arrays
let arr = [10, 20, 5, 40];
Math.max(...arr);    // 40
Math.min(...arr);    // 5


// ========================================
// 3. RANDOM NUMBERS
// ========================================

// ----------------------------------------
// Math.random() → returns 0 to <1
Math.random(); // e.g. 0.674233

// ----------------------------------------
// Random from 1 to 10
Math.floor(Math.random() * 10) + 1;

// ----------------------------------------
// Random from a to b  (inclusive)
function rand(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

rand(5, 15); // 5 - 15


// ========================================
// 4. POWER & ROOT
// ========================================

// ----------------------------------------
// Math.pow()
Math.pow(2, 3);   // 8

// ----------------------------------------
// Exponentiation operator (preferred)
2 ** 3;  // 8

// ----------------------------------------
// Math.sqrt()
Math.sqrt(25);  // 5

// ----------------------------------------
// Math.cbrt()
Math.cbrt(27);  // 3


// ========================================
// 5. ABSOLUTE VALUE
// ========================================

Math.abs(-10);  // 10
Math.abs(5);    // 5


// ========================================
// 6. TRIGONOMETRIC FUNCTIONS (in radians)
// ========================================

Math.sin(Math.PI / 2);  // 1
Math.cos(0);            // 1
Math.tan(Math.PI / 4);  // 1

// Convert degrees → radians
function degToRad(deg) {
  return deg * (Math.PI / 180);
}

Math.sin(degToRad(30)); // 0.5


// ========================================
// 7. LOGARITHMIC & EXPONENTIAL
// ========================================

// Natural logarithm (base e)
Math.log(10);

// Log base 10
Math.log10(100);  // 2

// Exponent (e^x)
Math.exp(2);      // 7.389...


/* NOTE:
Math.log(x) → ln(x)
Math.log10(x) → base-10 log
*/


// ========================================
// 8. MATH CONSTANTS
// ========================================

Math.PI;        // 3.141592653589793
Math.E;         // 2.718281828459045
Math.SQRT2;     // √2
Math.SQRT1_2;   // 1/√2
Math.LN2;       // ln(2)
Math.LN10;      // ln(10)


// ========================================
// 9. SIGN METHOD
// ========================================
// Returns:
// 1 when positive
// -1 when negative
// 0 when zero

Math.sign(10);   // 1
Math.sign(-10);  // -1
Math.sign(0);    // 0


// ========================================
// 10. CLAMPING (manual usage)
// ----------------------------------------
// Clamp a value between a range.
// Useful in games, animations, UI.

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

clamp(120, 0, 100);  // returns 100
clamp(-5, 0, 100);   // returns 0
clamp(50, 0, 100);   // returns 50


// ========================================
// 11. FLOATING POINT ISSUES
// ========================================

// JS floating point precision
0.1 + 0.2;
// 0.30000000000000004

// Fix:
+(0.1 + 0.2).toFixed(2);
// 0.30


// ========================================
// END OF MATH METHODS SHEET
// ========================================
