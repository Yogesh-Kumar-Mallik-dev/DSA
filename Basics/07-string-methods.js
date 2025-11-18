// ========================================
// 07 — STRING METHODS IN JAVASCRIPT
// ========================================
// Strings in JS are immutable.
// Any method that "changes" a string actually returns a NEW string.
//
// We classify string methods into:
// 1) Checking / Searching
// 2) Extracting / Slicing
// 3) Modifying
// 4) Conversion
// 5) Space Handling
// 6) Pattern Matching (regex sensitive)
// ========================================

let str = "Hello Yogesh";


// ========================================
// 1. CHECKING / SEARCHING METHODS
// ========================================

// ----------------------------------------
// length
str.length; 
// 12

// ----------------------------------------
// includes()
str.includes("Yo");  
// true

// ----------------------------------------
// startsWith()
str.startsWith("He"); 
// true

// ----------------------------------------
// endsWith()
str.endsWith("sh");
// true

// ----------------------------------------
// indexOf()
str.indexOf("o"); 
// 4

// ----------------------------------------
// lastIndexOf()
str.lastIndexOf("o");
// 7

// ----------------------------------------
// search() → regex supported
str.search(/Yo/i);
// 6


// ========================================
// 2. EXTRACTING / SLICING METHODS
// ========================================

// ----------------------------------------
// slice(start, end)
str.slice(0, 5); 
// "Hello"

// Negative values supported
str.slice(-6);
// "Yogesh"

// ----------------------------------------
// substring(start, end)
// (no negative values)
str.substring(0, 5);
// "Hello"

// ----------------------------------------
// substr(start, length) (deprecated but works)
str.substr(6, 3);
// "Yog"


// ========================================
// 3. MODIFYING METHODS
// ========================================

// ----------------------------------------
// toUpperCase()
str.toUpperCase(); 
// "HELLO YOGESH"

// ----------------------------------------
// toLowerCase()
str.toLowerCase();
// "hello yogesh"

// ----------------------------------------
// replace()
str.replace("Hello", "Hi");
// "Hi Yogesh"

// replace() replaces only first occurrence
"aaab".replace("a", "x");
// "xaab"

// ----------------------------------------
// replaceAll()
"aaab".replaceAll("a", "x");
// "xxx b"

// ----------------------------------------
// repeat()
"Yo".repeat(3);
// "YoYoYo"

// ----------------------------------------
// concat()
"Hello".concat(" ", "Yogesh");
// "Hello Yogesh"


// ========================================
// 4. CONVERSION METHODS
// ========================================

// ----------------------------------------
// split()
str.split(" ");
// ["Hello","Yogesh"]

"YOGESH".split("");
// ["Y","O","G","E","S","H"]

// ----------------------------------------
// toString()
(123).toString();
// "123"

// ----------------------------------------
// valueOf() → primitive string
"abc".valueOf();
// "abc"


// ========================================
// 5. SPACE HANDLING METHODS
// ========================================

// ----------------------------------------
// trim()
"   hi   ".trim();
// "hi"

// ----------------------------------------
// trimStart()
"   hi".trimStart();
// "hi"

// ----------------------------------------
// trimEnd()
"hi   ".trimEnd();
// "hi"


// ========================================
// 6. CHARACTER ACCESS METHODS
// ========================================

// ----------------------------------------
// charAt()
str.charAt(1); 
// "e"

// ----------------------------------------
// charCodeAt()
str.charCodeAt(0); 
// 72 (ASCII of 'H')

// ----------------------------------------
// str[index] (recommended)
str[0];
// "H"


// ========================================
// 7. TEMPLATE LITERALS (Backticks)
// ========================================

// Multi-line support
let msg = `
Hello,
This is Yogesh.
`;

// Variable embedding
let user = "Yogesh";
let greeting = `Hello ${user}`;

// Expression embedding
let a = 5, b = 10;
let total = `Sum = ${a + b}`;


// ========================================
// 8. STRING IMMUTABILITY
// ========================================

// Strings cannot be modified directly
let s = "Hello";
s[0] = "X";    // ❌ does nothing
// Always returns new string:
let s2 = "X" + s.slice(1);


// ========================================
// 9. PAD METHODS (useful for formatting)
// ========================================

// ----------------------------------------
// padStart(length, character)
"5".padStart(3, "0");
// "005"

// ----------------------------------------
// padEnd(length, character)
"5".padEnd(3, "0");
// "500"


// ========================================
// 10. LOCALE METHODS (rare but useful)
// ========================================
"yogesh".toLocaleUpperCase();
// "YOGESH"


// ========================================
// 11. COMMON PITFALLS
// ========================================

// (A) replace() only replaces first match
"aaa".replace("a", "x");
// "xaa"

// Use replaceAll() or regex with /g flag

// (B) substring() swaps negative values
"Hello".substring(-2, 3);
// same as substring(0, 3)

// (C) Strings are immutable
let q = "test";
q[0] = "X"; // ❌ ignored


// ========================================
// END OF STRING METHODS SHEET
// ========================================
