// ========================================
// 05 — LOOPS IN JAVASCRIPT
// ========================================
// Loops allow us to repeat actions.
// JS provides:
// 1) for loop
// 2) while loop
// 3) do-while loop
// 4) for...of (for arrays)
// 5) for...in (for objects)
// 6) break & continue
// ========================================


// ========================================
// 1. FOR LOOP (most commonly used)
// ========================================
// Syntax:
// for (initialization; condition; increment) { }

for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}


// Looping through array using index
let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// IMPORTANT:
// - Initialization runs only once.
// - Condition checked before every iteration.
// - Increment runs after each iteration.


// ========================================
// 2. WHILE LOOP
// ========================================
// Runs while condition is true.
// Useful when number of iterations is unknown.

let x = 1;

while (x <= 5) {
  console.log("X:", x);
  x++;
}

// WARNING: Infinite loop danger!
// If condition never becomes false → infinite loop.


// ========================================
// 3. DO-WHILE LOOP
// ========================================
// Executes at least once even if condition is false.

let y = 10;

do {
  console.log("This runs at least once");
  y++;
} while (y < 5);


// ========================================
// 4. NESTED LOOPS (loop inside loop)
// ========================================

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

// Use cases:
// - patterns
// - matrices
// - 2D arrays


// ========================================
// 5. BREAK & CONTINUE
// ========================================

// BREAK → stop loop immediately
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// prints 1 2 3 4


// CONTINUE → skip current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// prints 1 2 4 5


// ========================================
// 6. for...of LOOP (best for arrays)
// ========================================
// Gives values directly (not indexes)

let nums = [100, 200, 300];

for (let value of nums) {
  console.log(value);
}

// Use cases:
// - arrays
// - strings
// - maps, sets

// NOTE: Not suitable for objects.


// ========================================
// 7. for...in LOOP (best for objects)
// ========================================
// Gives keys of object

let user = {
  name: "Yogesh",
  age: 20,
  city: "Delhi"
};

for (let key in user) {
  console.log(key, ":", user[key]);
}


// IMPORTANT DIFFERENCE:
// for...of  → values (arrays)
// for...in  → keys (objects)


// ========================================
// 8. LOOPING THROUGH STRINGS
// ========================================

let word = "YOGESH";

for (let ch of word) {
  console.log(ch);
}


// ========================================
// 9. INFINITE LOOP EXAMPLES (avoid these!)
// ========================================

// while(true) { }  // infinite

// for(;;) { }      // infinite

// while(x < 5) {   // infinite if x never changes
//   console.log(x);
// }


// ========================================
// 10. BEST LOOP CHOICES
// ========================================

// BEST FOR ARRAYS
// for...of
// arr.forEach()
// for loop when index needed

// BEST FOR OBJECTS
// for...in

// BEST WHEN ITERATION COUNT UNKNOWN
// while loop

// BEST FOR GUARANTEED ONE RUN
// do...while


// ========================================
// 11. COMMON MISTAKES
// ========================================

// (A) Off-by-one error
for (let i = 0; i <= arr.length; i++) { 
  // Last element becomes undefined
}

// (B) Missing increment
let z = 0;
while (z < 5) {
  // z++;  // without increment → infinite loop
}

// (C) Using for...in on arrays (not recommended)
let colors = ["red", "blue"];
for (let key in colors) {
  console.log(key);  // prints index as string
}


// ========================================
// END OF LOOPS SHEET
// ========================================
