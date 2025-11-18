// ========================================
// 08 — NUMBER METHODS IN JAVASCRIPT
// ========================================
// JavaScript has only one number type: 64-bit floating point.
// That means integers and floats are treated the same.
//
// Number Methods help in:
// - formatting
// - rounding
// - converting
// - validation
// ========================================


// SAMPLE NUMBER
let num = 123.456;


// ========================================
// 1. toFixed() — ROUND and format decimals
// ========================================
// Returns a STRING
num.toFixed(2);     
// "123.46"

(10.6789).toFixed(1);
// "10.7"

// Useful for UI formatting (money, percentages)


// ========================================
// 2. toPrecision() — significant digits
// ========================================

num.toPrecision(4);
// "123.5"

(1.23456).toPrecision(2);
// "1.2"


// ========================================
// 3. toExponential()
// ========================================

(1234).toExponential(2);
// "1.23e+3"

(0.005).toExponential();
// "5e-3"


// ========================================
// 4. Number() — convert to number
// ========================================

Number("123");      // 123
Number("12.5");     // 12.5
Number("Hello");    // NaN
Number(true);       // 1
Number(false);      // 0
Number(null);       // 0
Number(undefined);  // NaN


// ========================================
// 5. parseInt() — extract INTEGER
// ========================================

parseInt("42px");   // 42
parseInt("10");     // 10
parseInt("10.99");  // 10
parseInt("hello");  // NaN


// ========================================
// 6. parseFloat() — extract FLOAT
// ========================================

parseFloat("42.67px"); // 42.67
parseFloat("10.99");   // 10.99
parseFloat("hello");   // NaN


// ========================================
// 7. Number.isInteger()
// ========================================

Number.isInteger(10);    // true
Number.isInteger(10.5);  // false
Number.isInteger("10");  // false


// ========================================
// 8. Number.isNaN()
// ========================================
// Safer than global isNaN()

Number.isNaN(NaN);       // true
Number.isNaN("hello");   // false (not number → false)


// ========================================
// 9. isNaN() — older, confusing
// ========================================
// WARNING: isNaN() tries to convert to number first.

isNaN("hello");  // true  (confusing)
isNaN("123");    // false


// ========================================
// 10. Number.isFinite()
// ========================================

Number.isFinite(100);        // true
Number.isFinite(Infinity);   // false
Number.isFinite("100");      // false


// ========================================
// 11. Number Properties
// ========================================

Number.MAX_VALUE;        // Largest number JS can handle
Number.MIN_VALUE;        // Smallest positive number
Number.MAX_SAFE_INTEGER; // 2^53 - 1
Number.MIN_SAFE_INTEGER; // -(2^53 - 1)
Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;


// ========================================
// 12. Number Safety & BigInt warning
// ========================================

Number.MAX_SAFE_INTEGER;
// 9007199254740991

9007199254740991 + 1;
// 9007199254740992 (correct)

9007199254740991 + 2;
// 9007199254740992 (WRONG)


// Use BigInt for large numbers:
12345678901234567890n;


// ========================================
// 13. Number Formatting Examples
// ========================================

// Currency formatting
let price = 1234.5;
price.toFixed(2);
// "1234.50"


// Rounded to nearest integer (Math.round)
Math.round(4.6);  
// 5

Math.round(4.3);
// 4


// ========================================
// 14. Converting Booleans to numbers
// ========================================

Number(true);   // 1
Number(false);  // 0


// ========================================
// 15. Unary + operator
// ========================================
// Fastest way to convert to number

+"123";   // 123
+"10.5";  // 10.5
+"hi";    // NaN


// ========================================
// 16. Edge Cases & Pitfalls
// ========================================

// (A) NaN is NOT equal to itself
NaN === NaN;  
// false

// Correct check:
Number.isNaN(NaN); // true


// (B) 0.1 + 0.2 precision issue
0.1 + 0.2;
// 0.30000000000000004

// Fix using toFixed()
+(0.1 + 0.2).toFixed(2);
// 0.30


// (C) toFixed() returns string!
let n = 12.345;
typeof n.toFixed(1);
// "string"


// ========================================
// END OF NUMBER METHODS SHEET
// ========================================
