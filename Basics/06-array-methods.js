// ========================================
// 06 — ARRAY METHODS IN JAVASCRIPT
// ========================================
// Arrays are dynamic in JavaScript.
// They can store mixed data types and grow/shrink at runtime.
//
// We classify methods into groups:
// 1) Adding/Removing Elements
// 2) Searching
// 3) Transforming
// 4) Iteration
// 5) Sorting/Reversing
// 6) Conversion
// 7) Other Utility Methods
//
// ========================================


// SAMPLE ARRAY
let arr = [10, 20, 30, 40];


// ========================================
// 1. ADDING & REMOVING ELEMENTS
// ========================================

// ----------------------------------------
// push() → add at end
// ----------------------------------------
arr.push(50); 
// [10,20,30,40,50]

// ----------------------------------------
// pop() → remove last
// ----------------------------------------
arr.pop(); 
// [10,20,30,40]

// ----------------------------------------
// unshift() → add at beginning
// ----------------------------------------
arr.unshift(5);
// [5,10,20,30,40]

// ----------------------------------------
// shift() → remove from beginning
// ----------------------------------------
arr.shift();
// [10,20,30,40]


// ----------------------------------------
// splice() → add/remove anywhere
// splice(start, deleteCount, item1, item2...)
let nums = [1,2,3,4,5];
nums.splice(2, 1);     // remove 3
nums.splice(1, 0, 99); // insert at index 1
// [1,99,2,4,5]

// ----------------------------------------
// slice() → non-destructive copy
// slice(start, end)
let slicePart = nums.slice(1, 3);
// [99,2]


// ========================================
// 2. SEARCHING METHODS
// ========================================

// ----------------------------------------
// includes()
[1,2,3].includes(2); // true

// ----------------------------------------
// indexOf()
[1,2,3].indexOf(2); // 1

// ----------------------------------------
// lastIndexOf()
[1,2,3,2].lastIndexOf(2); // 3

// ----------------------------------------
// find() → returns first matching value
let val = [10,20,30].find(x => x > 15); 
// 20

// ----------------------------------------
// findIndex() → returns index
[10,20,30].findIndex(x => x > 15); 
// 1

// ----------------------------------------
// some() → at least one passes test?
[1,2,3].some(x => x > 2); // true

// ----------------------------------------
// every() → all pass test?
[1,2,3].every(x => x > 0); // true


// ========================================
// 3. TRANSFORMATION METHODS
// ========================================

// ----------------------------------------
// map() → creates new array
let doubled = [1,2,3].map(x => x * 2);
// [2,4,6]

// ----------------------------------------
// filter() → keeps matching values
let evens = [1,2,3,4].filter(x => x % 2 === 0);
// [2,4]

// ----------------------------------------
// reduce() → accumulate values
let sum = [1,2,3,4].reduce((a,b) => a + b, 0);
// 10

// ----------------------------------------
// reduceRight() → process right to left
[1,2,3].reduceRight((a,b) => a - b);
// ((3 - 2) - 1)


// ========================================
// 4. ITERATION METHODS
// ========================================

// ----------------------------------------
// forEach() → loop (no return)
[10,20,30].forEach((val, idx) => {
  console.log(idx, val);
});


// ========================================
// 5. SORTING & REVERSING
// ========================================

// ----------------------------------------
// sort() → sorts alphabetically by default
let chars = ["b","a","d","c"];
chars.sort();
// ["a","b","c","d"]

// Sorting numbers needs compare function
let nums2 = [10, 5, 30, 2];
nums2.sort((a, b) => a - b);
// [2,5,10,30]

// ----------------------------------------
// reverse()
nums2.reverse();
// [30,10,5,2]


// ========================================
// 6. ARRAY CONVERSION METHODS
// ========================================

// ----------------------------------------
// join() → array to string
["a","b","c"].join("-");
// "a-b-c"

// ----------------------------------------
// toString()
[10,20,30].toString();
// "10,20,30"

// ----------------------------------------
// concat() → merge arrays
let a1 = [1,2];
let a2 = [3,4];
let merged = a1.concat(a2);
// [1,2,3,4]


// ========================================
// 7. OTHER USEFUL METHODS
// ========================================

// ----------------------------------------
// flat() → flatten nested arrays
let nested = [1, [2, [3]]];
nested.flat(2);
// [1,2,3]

// ----------------------------------------
// flatMap()
[1,2,3].flatMap(x => [x, x * 2]);
// [1,2,2,4,3,6]

// ----------------------------------------
// fill() → fill array with value
let filled = new Array(5).fill(0);
// [0,0,0,0,0]

// ----------------------------------------
// copyWithin()
let arr2 = [1,2,3,4];
arr2.copyWithin(1, 2);
// [1,3,4,4]

// ----------------------------------------
// Array.isArray()
Array.isArray([1,2,3]); // true

// ----------------------------------------
// Array.from() → convert iterable to array
Array.from("YOGESH");
// ["Y","O","G","E","S","H"]

// ----------------------------------------
// Array.of()
Array.of(1,2,3); 
// [1,2,3]


// ========================================
// 8. SPREAD (...) WITH ARRAYS
// ========================================

let nums3 = [1,2,3];
let expanded = [...nums3, 4, 5];
// [1,2,3,4,5]

// Copy array
let copyArr = [...nums3];

// Merge arrays
let mergedArr = [...nums3, ...nums2];


// ========================================
// 9. DESTRUCTURING ARRAYS
// ========================================

let [first, second] = [10, 20];
let [a, , c] = [1, 2, 3]; 
// skip 2nd value

// swap
let x = 1, y = 2;
[x, y] = [y, x];


// ========================================
// 10. COMMON PITFALLS
// ========================================

// (A) sort() without compare → WRONG for numbers
[10,5,30].sort(); 
// [10,30,5] ❌

// (B) forEach() cannot break or return
// use for...of instead

// (C) map() MUST return a value
[1,2,3].map(x => {
  x * 2;   // no return → undefined
});

// (D) slice() vs splice()
// slice → no change to original
// splice → modifies original


// ========================================
// END OF ARRAY METHODS SHEET
// ========================================
