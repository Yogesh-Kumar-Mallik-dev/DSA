// ========================================
// 09 — OBJECT METHODS IN JAVASCRIPT
// ========================================
// Objects store data in key–value pairs.
// JavaScript objects are dynamic — keys can be added/removed anytime.
//
// This sheet covers:
// 1) Creating Objects
// 2) Accessing Values
// 3) Modifying Objects
// 4) Object Utility Methods
// 5) Copying Objects (shallow/deep)
// 6) Freezing / Sealing
// 7) Nested Objects
// 8) Destructuring
// 9) Spread Operator with Objects
// ========================================


// SAMPLE OBJECT
let user = {
  name: "Yogesh",
  age: 20,
  skills: ["HTML", "CSS"]
};


// ========================================
// 1. ACCESSING VALUES
// ========================================

user.name;         // dot notation
user["age"];       // bracket notation

let key = "name";
user[key];         // dynamic keys


// ========================================
// 2. ADDING / MODIFYING / DELETING PROPERTIES
// ========================================

// Add
user.city = "Delhi";

// Modify
user.age = 21;

// Delete
delete user.city;


// ========================================
// 3. CHECKING PROPERTY EXISTENCE
// ========================================

"name" in user;         // true
user.hasOwnProperty("age"); // true

// difference:
// in → checks prototype chain also
// hasOwnProperty → only own properties


// ========================================
// 4. OBJECT UTILITY METHODS
// ========================================

// ----------------------------------------
// Object.keys() → returns array of keys
Object.keys(user);
// ["name", "age", "skills"]

// ----------------------------------------
// Object.values() → returns array of values
Object.values(user);
// ["Yogesh", 21, ["HTML","CSS"]]

// ----------------------------------------
// Object.entries() → key-value pairs as array
Object.entries(user);
// [["name","Yogesh"], ["age",21], ["skills", [...]]]


// ========================================
// 5. COPYING OBJECTS
// ========================================

// ----------------------------------------
// (A) SHALLOW COPY (copies top-level only)

// Using Object.assign()
let copy1 = Object.assign({}, user);

// Using spread (...)
let copy2 = { ...user };

// WARNING:
// Nested objects/arrays are STILL LINKED

let obj1 = { a: 1, b: { x: 10 } };
let obj2 = { ...obj1 };

obj2.b.x = 999;
obj1.b.x; // 999  (same reference!)


// ----------------------------------------
// (B) DEEP COPY (new memory for nested data)

// Method 1: structuredClone()  (best)
let deepCopy1 = structuredClone(obj1);

// Method 2: JSON trick (only works for simple objects)
let deepCopy2 = JSON.parse(JSON.stringify(obj1));


// ========================================
// 6. OBJECT FREEZING & SEALING
// ========================================

// ----------------------------------------
// Object.freeze()
// NO add, NO modify, NO delete.

let objA = { x: 1 };
Object.freeze(objA);

objA.x = 99;     // ❌ ignored
objA.y = 20;     // ❌ ignored
delete objA.x;   // ❌ ignored


// ----------------------------------------
// Object.seal()
// Can modify existing keys.
// Cannot add/remove keys.

let objB = { x: 1 };
Object.seal(objB);

objB.x = 99;     // allowed
objB.y = 20;     // ❌ ignored
delete objB.x;   // ❌ ignored


// ========================================
// 7. OBJECT MERGE
// ========================================

// Using Object.assign()
let objC = { a: 1 };
let objD = { b: 2 };

let merged1 = Object.assign({}, objC, objD);

// Using spread (...)
let merged2 = { ...objC, ...objD };


// ========================================
// 8. NESTED OBJECTS
// ========================================

let student = {
  name: "Yogesh",
  marks: {
    math: 95,
    science: 90
  }
};

student.marks.math;    // 95

// Nested update
student.marks.science = 91;


// ========================================
// 9. OPTIONAL CHAINING (?.) FOR OBJECTS
// ========================================

let data = {
  profile: {
    address: {
      city: "Delhi"
    }
  }
};

data.profile?.address?.city;      // "Delhi"
data.profile?.contact?.email;     // undefined (safe)


// ========================================
// 10. OBJECT DESTRUCTURING
// ========================================

// Basic
let { name, age } = user;

// Rename variable
let { name: username } = user;

// Default value
let { city = "Unknown" } = user;


// Nested destructuring
let student2 = {
  info: {
    id: 101,
    department: "CSE"
  }
};

let { info: { id, department } } = student2;


// ========================================
// 11. SPREAD OPERATOR WITH OBJECTS
// ========================================

let objo1 = { a: 1, b: 2 };
let objo2 = { ...objo1, c: 3 };

// Overwrite values
let objo3 = { a: 10, ...objo1 };
// a becomes 1 (from objo1)


// ========================================
// 12. OBJECT LOOPS
// ========================================

// for...in
for (let key in user) {
  console.log(key, user[key]);
}

// Object.keys() + forEach
Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});


// ========================================
// 13. COMPARING OBJECTS
// ========================================

// Objects are compared by reference
let o1 = { x: 1 };
let o2 = { x: 1 };

o1 === o2; // false

let o3 = o1;
o1 === o3; // true


// Deep comparison using JSON
JSON.stringify(o1) === JSON.stringify(o2);
// true (only works for simple objects)


// ========================================
// 14. OBJECT.CONSTRUCTOR FUNCTIONS (BASICS)
// ========================================

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("Yogesh", 20);


// ========================================
// 15. COMMON PITFALLS
// ========================================

// (A) nested objects in shallow copy share memory
let main = { a: { b: 10 } };
let shallow = { ...main };
shallow.a.b = 99;
// main.a.b is now 99 too ❌


// (B) object keys become strings automatically
let o = {};
o[123] = "number key";
Object.keys(o);   // ["123"]


// (C) delete only removes property, not variable
let objX = { a: 10 };
delete objX;   // ❌ does nothing (only works on properties)


// ========================================
// END OF OBJECT METHODS SHEET
// ========================================
